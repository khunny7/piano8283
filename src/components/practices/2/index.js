
import { useEffect, useState } from 'react';
import { Stack, Offcanvas, Button } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import { BirdCanvas } from "./birdCanvas"
import { BirdConfig } from './birdConfig';
import markdown from './instruction.md';

const Practice2 = (props) => {
  const [show, setShow] = useState(false);
  const [bgColor, setBgColor] = useState('#CCCCCC');
  const [birdSize, setBirdSize] = useState(100);
  const [markdownText, setMarkdownText] = useState();

  useEffect(() => {
    fetch(markdown).then((response) => response.text()).then((text) => {
      setMarkdownText(text);
    });
  }, [setMarkdownText]);

  return (
    <>
    <Button onClick={() => setShow(true)}>
      Show description and help
    </Button>
    <Stack direction="horizontal" gap={3}>
      <BirdConfig bgColor={bgColor} birdSize={birdSize} setBgColor={setBgColor} setBirdSize={setBirdSize} />
      <BirdCanvas bgColor={bgColor} birdSize={birdSize} />
    </Stack>
    <Offcanvas show={show} placement="top" onHide={() => setShow(false)} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ReactMarkdown children={markdownText} />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export { Practice2 };
