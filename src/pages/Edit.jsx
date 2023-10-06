import { Button, Dropdown, DropdownButton } from "react-bootstrap";
import { exportComponentAsJPEG } from "react-component-export-image";
import React, { useState, createRef } from "react";
import { useSearchParams } from "react-router-dom";
import Text from "../components/Text";
import './edit.css';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  EmailShareButton,
} from "react-share";
import {
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaLinkedin,
  FaPinterest,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa"; 

const EditPage = () => {
  const [params] = useSearchParams();
  const [count, setCount] = useState(0);
  const memeRef = createRef();
  const addText = () => {
    setCount(count + 1);
  };

const shareUrl = params.get("url") || ""; 
const title = "Check out this meme!"; 

  return (
    <div>
      <div
        style={{
          width: "500px",
          border: "1px solid",
        }}
        ref={memeRef}
        className="meme mt-5 mb-5"
      >
        <img src={shareUrl} width="250px" alt="" />
        {Array(count)
          .fill(0)
          .map((e, index) => (
            <Text key={index} />
          ))}
      </div>
      <Button onClick={addText}>Add Text</Button>
      <Button
        variant="success"
        onClick={(e) => {
          exportComponentAsJPEG(memeRef);
        }}
      >
        Save Text
      </Button>
      
      <DropdownButton
        id="share-dropdown"
        title={<span>Share</span>}
        variant="info"
        className="mt-3"
      >
        <div className="horizontal-icons">
          <FacebookShareButton url={shareUrl} quote={title}>
            <FaFacebook />
          </FacebookShareButton>
          <TwitterShareButton url={shareUrl} title={title}>
            <FaTwitter />
          </TwitterShareButton>
          <WhatsappShareButton url={shareUrl} title={title}>
            <FaWhatsapp />
          </WhatsappShareButton>
          <LinkedinShareButton url={shareUrl} title={title}>
            <FaLinkedin />
          </LinkedinShareButton>
          <PinterestShareButton url={shareUrl} title={title} media={shareUrl}>
            <FaPinterest />
          </PinterestShareButton>
          <EmailShareButton url={shareUrl} subject={title} body="Check this out!">
            <FaEnvelope />
          </EmailShareButton>
          {/* Instagram share link */}
          <a
            href={`https://www.instagram.com/share?url=${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </DropdownButton>
    </div>
  );
};

export default EditPage;
