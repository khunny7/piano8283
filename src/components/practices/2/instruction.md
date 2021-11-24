## Project description
### Build a react app that has 3 components
1. Parent component that has BirdConfig and BirdCanvas
2. BirdConfig component that can configure the bird's size and background color
3. BirdCanvas where the bird is displayed and the bird can move left and right with buttons

### External components used
- For color picker: <Form.Control type="color" />
- For size control: <Form.Range />
- For side by side placement: <Stack> (react-bootstrap)

### Static resources
- Image: bird.png can be obtained from the webpage

### Tips and tricks
#### How to mirror an image
- transform: scaleX(1)
- transform: scaleX(-1)