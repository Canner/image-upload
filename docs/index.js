import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'antd';
import {IntlProvider} from 'react-intl';
import {ImgurStorage} from "@canner/canner-storage";
import enLocale from '../src/locale/en';
import ImageUpload from '../src/index';

class Demo extends Component {
  constructor(props) {
    super(props);
    this.showPopup = this.showPopup.bind(this);
    this.closePopup = this.closePopup.bind(this);

    this.state = {
      popup: false,
      currentUser: null
    };

    this.imageStorage = new ImgurStorage({
      clientId: 'Client-ID a214c4836559c77'
    });
  }

  showPopup() {
    this.setState({
      popup: true
    });
  }

  closePopup() {
    this.setState({
      popup: false
    });
  }

  onChange(value) {
    console.log(value);
  }

  login() {
    if (this.auth.currentUser) {
      this.setState({currentUser: this.auth.currentUser});
      return Promise.resolve();
    }
    return this.auth.signInAnonymously();
  }

  onAuthStateChanged(user) {
    if (user) {
      this.setState({currentUser: user});
    }
  }

  render() {
    return (
      <IntlProvider locale="en">
        <React.Fragment>
          <h1>Click the button below to see the demo</h1>
          <Button onClick={this.showPopup}>show edit</Button>
          <ImageUpload
            locale="en"
            localeMessages={enLocale}
            closeEditPopup={this.closePopup}
            editPopup={this.state.popup}
            onChange={this.onChange}
            imageStorage={this.imageStorage}
          />
        </React.Fragment>
      </IntlProvider>
    );
  }
}

ReactDOM.render(
  <Demo/>
, document.getElementById('root'));
