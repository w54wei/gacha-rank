import React from 'react'
import './Styles/App.css'
import Header from './Components/Header'
import Body from './Components/Body'
import Footer from './Components/Footer'
import ReactGA from 'react-ga'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      sortedData: [],
      year: 0,
      month: 0
    }
    this.getData = this.getData.bind(this)
    this.reverseRevenue = this.reverseRevenue.bind(this)
    this.returnDate = this.returnDate.bind(this)
    this.update = this.update.bind(this)
    this.updateDownloads = this.updateDownloads.bind(this)
    this.sortDownloads = this.sortDownloads.bind(this)
    this.sortRevenue = this.sortRevenue.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.returnDate()
    this.getData()
    ReactGA.initialize('UA-162538032-3')
    ReactGA.pageview(window.location.pathname + window.location.search)
  }

  async getData() {
    let response = await fetch('https://api-gacha.herokuapp.com/data')
    let data = await response.json()
    this.updateData(data)
  }

  // Set state to be data.
  async updateData(arr) {
    let newArr = []
    await arr.map((object, i) => {
      let appleDownloads = this.update(object.appleDownloads)
      let googleDownloads = this.update(object.googleDownloads)
      let totalDownloads = appleDownloads + googleDownloads
      let appleRevenue = this.update(object.appleRevenue)
      let googleRevenue = this.update(object.googleRevenue)
      let totalRevenueNum = appleRevenue + googleRevenue
      let totalRevenue = this.reverseRevenue(totalRevenueNum)
      newArr.push({
        title: object.title,
        androidName: object.androidName,
        androidUS: object.androidUS,
        appleDownloads: this.updateDownloads(object.appleDownloads),
        appleDownloadsNum: appleDownloads,
        appleRevenue: object.appleRevenue,
        appleRevenueNum : appleRevenue,
        googleDownloads: this.updateDownloads(object.googleDownloads),
        googleDownloadsNum: googleDownloads,
        googleRevenue: object.googleRevenue,
        googleRevenueNum: object.googleRevenueNum,
        img: object.img,
        iosName: object.iosName,
        iosUS: object.iosUS,
        publisher: object.publisher,
        totalDownloads: totalDownloads,
        totalRevenue: totalRevenue,
        totalRevenueNum: totalRevenueNum
      })
    })
    this.setState ({
      data: newArr
    })
    this.sortDownloads()
  }

  update(stat) {
    let newStat = stat
    if (stat[0] === '<' || stat[0] === '$') stat = stat.substring(1)
    if (stat.slice(-1) === 'k') {
       newStat = stat.slice(0, -1)
       newStat += '000'
       newStat = Number(newStat)
       return newStat
    } else if (stat.slice(-1) === 'm') {
      newStat = stat.slice(0, -1)
      newStat += '000000'
      newStat = Number(newStat)
      return newStat
    } else {
      return stat
    }
  }

  updateDownloads(download) {
      let newDownload = download
      if (download.slice(-1) === 'k') {
        newDownload = download.slice(0, -1)
        newDownload += ' K'
      } else if (download.slice(-1) === 'm') {
        newDownload = download.slice(0, -1)
        newDownload += ' M'
      }
      return newDownload
  }

  reverseRevenue(revenue) {
    let newRevenue = String(revenue)
    if (newRevenue.length === 7) {
      newRevenue = newRevenue.slice(0, newRevenue.length - 5)
      newRevenue = newRevenue[0] + '.' + newRevenue[1]
      newRevenue += ' M'
    } else if (newRevenue.length >= 7) {
      newRevenue = newRevenue.slice(0, newRevenue.length - 6)
      newRevenue += ' M'
    } else if (newRevenue >= 6) {
      newRevenue = newRevenue.slice(0, newRevenue.length - 3)
      newRevenue += ' K'
    }
    newRevenue = '$' + newRevenue
    return newRevenue
  }

  sortDownloads() {
    let arr = this.state.data
    arr.sort((a, b) => parseFloat(b.totalDownloads)
                     - parseFloat(a.totalDownloads))
    arr = arr.slice(0, 50)
    this.setState({
      sortedData: arr
    })
  }

  sortRevenue() {
    let arr = this.state.data
    arr.sort((a, b) => parseFloat(b.totalRevenueNum)
                     - parseFloat(a.totalRevenueNum))
    arr = arr.slice(0, 50)
    this.setState({
      sortedData: arr
    })
  }

  returnDate() {
    let date = new Date()
    let year = date.getFullYear()
    
    // Get month.
    let month = date.getMonth()

    let arr = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 
               'Sept', 'Oct', 'Nov', 'Dec']
    let n = arr[month]
    this.setState({
      year: year,
      month: n
    })
  }

  handleChange(event) {
    switch(event.target.value) {
      case '0':
        this.sortDownloads()
        break
      case '1':
        this.sortRevenue()
        break
      default:
        this.sortDownloads()
    }
  }

  render() {
    let sortedData = this.state.sortedData
    let year = this.state.year
    let month = this.state.month
    return (
      <div className='App'>
        <Header year = {year} month = {month} handleChange = {this.handleChange} />
        <Body data = {sortedData} />
        <Footer />
      </div>
    );
  }
}

export default App