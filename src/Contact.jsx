import React from "react";
import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    .container {
      margin-top: 6rem;
      text-align: center;
      .contact-form {
        max-width: 50rem;
        margin: auto;
        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;
            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  .video-fullscreen-wrapper {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

  .video-fullscreen-wrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
    object-fit: cover;
    pointer-events: none; /* optional: prevent user interaction */
  }
  `;

  return (
    <Wrapper>
      {/* <h2 className="common-heading">Feel Free to Contact us</h2> */}

      <div className="video-fullscreen-wrapper">
        <iframe
          src="https://www.youtube.com/embed/jIDCKtyMwVI?autoplay=1&mute=1&loop=1&playlist=jIDCKtyMwVI&controls=0&showinfo=0&modestbranding=1"
          title="YouTube Background Video"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
      </div>


      <div className="container">
        <div className="contact-form">
          <form
            // action="https://formspree.io/f/xgedgjkr"
            // method="POST"
            className="contact-inputs">
            <input
              type="text"
              name="username"
              placeholder="username"
              autoComplete="off"
              required
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="message"
              cols="30"
              rows="6"
              autoComplete="off"
              required></textarea>

            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;