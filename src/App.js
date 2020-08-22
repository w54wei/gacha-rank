import React from 'react'
import logo from './logo.svg'
import './Styles/App.css'
import Header from './Components/Header'
import Body from './Components/Body'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      year: 0,
      month: 0
    };
    this.getData = this.getData.bind(this);
    this.sortData = this.sortData.bind(this);
    this.updateDownloads = this.updateDownloads.bind(this);
    this.reverseUpdateDownloads = this.reverseUpdateDownloads.bind(this);
    this.returnDate = this.returnDate.bind(this);
  }

  componentDidMount() {
    this.returnDate();
    this.getData();
  }

  async getData() {
    let response = await fetch('https://api-gacha.herokuapp.com/data');
    let json = await response.json();
    this.updateData(json);
  }

  // Data Object
  // downloadsAndroid, downloadsIOS, publisher, revnue, title, img
  async updateData(arr) {
    let newArr = [];
    await arr.map((object, i) => {
      let googleDownloads = this.updateDownloads(object.google);
      let appleDownloads = this.updateDownloads(object.apple);
      newArr.push({
        google: googleDownloads,
        apple: appleDownloads,
        publisher: object.publisher,
        revenue: object.revenue,
        title: object.title,
        img: object.img,
        iosLink: object.iosLink,
        androidLink: object.androidLink
      })
    })
    this.sortData(newArr);
    newArr.map((object, i) => {
      let googleDownloads = this.reverseUpdateDownloads(object.google);
      let appleDownloads = this.reverseUpdateDownloads(object.apple);
      object.google = googleDownloads;
      object.apple = appleDownloads;
    })
    this.setState({
      data: newArr
    })
  }

  updateDownloads(downloads) {
    let newDownloads = downloads;
    if (downloads.slice(-1) === 'k') {
       newDownloads = downloads.slice(0, -1);
       newDownloads += '000';
       newDownloads = Number(newDownloads);
       return newDownloads;
    } else if (downloads.slice(-1) === 'm') {
      newDownloads = downloads.slice(0, -1);
      newDownloads += '000000';
      newDownloads = Number(newDownloads);
      return newDownloads;
    } else {
      return downloads;
    }
  }

  reverseUpdateDownloads(downloads) {
    let newDownloads = String(downloads);
    let length = newDownloads.length;
    let count = 0;
    for (let i = 0; i < length; ++i) {
      if (newDownloads[i] === '0') {
        ++count;
      }
    }
    if (count >= 6) {
      newDownloads = newDownloads.slice(0, length - 6);
      newDownloads += 'm';
    } else if (count >= 3) {
      newDownloads = newDownloads.slice(0, length - 3);
      newDownloads += 'k';
    }
    return newDownloads;  
  }

  sortData(arr) {
    arr.sort((a, b) => parseFloat(b.google + b.apple)
                     - parseFloat(a.google + a.apple));
  }

  returnDate() {
    let date = new Date();
    let year = date.getFullYear();
    
    // Need to get previous month. Data scrapped is previous month.
    let month = date.getMonth() - 1;
    if (month < 0) {
      month = 11;
    }
    let arr = new Array();
    arr[0] = "January";
    arr[1] = "February";
    arr[2] = "March";
    arr[3] = "April";
    arr[4] = "May";
    arr[5] = "June";
    arr[6] = "July";
    arr[7] = "August";
    arr[8] = "September";
    arr[9] = "October";
    arr[10] = "November";
    arr[11] = "December";
    let n = arr[month];
    this.setState({
      year: year,
      month: n
    })
  }

  render() {
    let info = this.state.data;
    let year = this.state.year;
    let month = this.state.month;
    return (
      <div className='App'>
        <Header year = {year} month = {month}/>
        <Body data={info} />
      </div>
    );
  }
}

export default App;