import React from 'react';
import logo from './logo.svg';
import './Styles/App.css';
import Header from './Components/Header'
import Listing from './Components/Listing'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.getData = this.getData.bind(this);
    this.sortData = this.sortData.bind(this);
    this.updateDownloads = this.updateDownloads.bind(this);
  }

  componentDidMount() {
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
        img: object.img
      })
    })
    this.sortData(newArr);
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

  sortData(arr) {
    arr.sort((a, b) => parseFloat(b.google + b.apple)
                     - parseFloat(a.google + a.apple));
  }

  render() {
    let info = this.state.data;
    return (
      <div className='App'>
        <Header />
        {info.map((obj, i) => <Listing key={obj.title} rank={++i} obj={obj}/>)}
      </div>
    );
  }
}

export default App;