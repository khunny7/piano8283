
import { Form } from 'react-bootstrap';

const BirdConfig = (props) => {
  const {
    bgColor,
    setBirdSize,
    setBgColor,
  } = props;

  return (
    <div>
        <Form.Label htmlFor="exampleColorInput">Pick background color</Form.Label>
        <Form.Control
          type="color"
          id="exampleColorInput"
          defaultValue={bgColor}
          onChange={(e) => { console.log(e); setBgColor(e.target.value); }}
          title="Choose bird background color"
        />
        <Form.Label>Choose bird size</Form.Label>
        <Form.Range
          onChange={(e) => { setBirdSize(e.target.value * 2)}}
        />
    </div>
  );
}

export { BirdConfig };
