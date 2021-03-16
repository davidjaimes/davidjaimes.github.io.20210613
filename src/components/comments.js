import React, {Component} from "react";
export default class Comments extends Component {

  constructor(props){ 
    super(props);
    this.commentBox = React.createRef();
  }
  componentDidMount () {
      let scriptEl = document.createElement("script");
      scriptEl.setAttribute("src", "https://utteranc.es/client.js");
      scriptEl.setAttribute("crossorigin","anonymous");
      scriptEl.setAttribute("async", true);
      scriptEl.setAttribute("repo", "davidjaimes/comments");
      scriptEl.setAttribute("issue-term", "title");
      scriptEl.setAttribute( "theme", "github-light");
      this.commentBox.current.appendChild(scriptEl);
  }

  render() {
    return (
        <div ref={this.commentBox} className="comment-box" style={{width: "768px"}}></div>
    );
  }
}