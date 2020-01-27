import React, { Component } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe"


class Subscribe extends Component {
  render() {
    const url =
      "https://goldenshoe.us4.list-manage.com/subscribe/post?u=3612879d0de687331d6564350&amp;id=2d084de1fc";
    return (
      <div>
        <h2>Golden Shoe Mailing List</h2>
        	<MailchimpSubscribe url={url} />
      </div>
    );
  }
}

export default Subscribe;