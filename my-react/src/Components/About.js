import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';


const About = () => {
  // State to manage the visibility of each option's content
  const [showOption1, setShowOption1] = useState(false);
  const [showOption2, setShowOption2] = useState(false);

  // Function to toggle the visibility of Option 1 content
  const toggleOption1 = () => {
    setShowOption1(!showOption1);
    setShowOption2(false); // Close Option 2 content when Option 1 is clicked
  };

  // Function to toggle the visibility of Option 2 content
  const toggleOption2 = () => {
    setShowOption2(!showOption2);
    setShowOption1(false); // Close Option 1 content when Option 2 is clicked
  };

  return (
    <div>
      <h1>About</h1>

      <p>Welcome to the About page. Here you can find information about our company and services.</p>

      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Select Option
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={toggleOption1}>Option 1</Dropdown.Item>
          <Dropdown.Item onClick={toggleOption2}>Option 2</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {/* Content for Option 1 */}
      {showOption1 && (
        <div id="option1">
          <h3>Option 1</h3>
          <p>
            We're passionate about literature and knowledge. "My Library" is a special section where you can explore a curated collection of books, magazines, and articles handpicked by our experts.
          </p>
          <p>
            Whether you're an avid reader or a casual learner, "My Library" has something for everyone. Our collection covers a wide range of genres and topics, from classic literature to the latest bestsellers, from technology trends to lifestyle tips.
          </p>
          <p>
            Dive into the world of words, ideas, and imagination with "My Library." Explore, read, and discover the joy of learning and entertainment.
          </p>
        </div>
      )}

      {/* Content for Option 2 */}
      {showOption2 && (
        <div id="option2">
          <h3>Option 2</h3>
          <p>This is the content for Option 2. You can provide detailed information about this option here.</p>
        </div>
      )}
    </div>
  );
};

export default About;
