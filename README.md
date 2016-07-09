![Sendero](http://sendero.uy/images/logo-white.png)

Sendero Web Applications
========================

This repository offers Web interfaces to visualize and interact with a Sendero artwork in a real time fashion.

These are developed with Three.js.

We deliver the applications through an Express.js server.


Usage
-----

 - Go to `public/conf/serverConf.xml` and configure your artwork in the same way it is configured in [Sendero Server](https://github.com/Sendero-Project/SenderoServer) in your instance. 

  Here is a fragment that indicates the structure it must follow:

  ```
  <Configuration pixelQuantity='90' installationName='Pentakis' fps='30'>
    <Servers>
      <Server name="StreamingServer" url="localhost" port="8080" />
      <Server name="InteractionServer" url="localhost" port="8081" />
    </Servers>
    <FrameConf>
      <Pixel id='0' r='255' g='255' b='255' a='255'>
        <Render mesh='cylinderShort'>
          <Front x='-0.0998540000000001' y='0.229397' z='-0.0259085' />
          <Up x='0.546030364592086' y='0.488412566772085' z='2.22000739347465' />
          <Position x='55.8648' y='22.9397' z='-43.28855' />
        </Render>
      </Pixel>
      .
      .
      .        
    </FrameConf>
  </Configuration>
  ```

  `pixelQuantity` and `fps` must be set to match the ones configured in Sendero Server. `FrameConf` element can be entirely copied from the Sendero Server's `serverConf.xml` file. `Servers` element is the place to configure Streaming Server and Interaction Server's  addresses.

 - Run the Express.js server with `node app.js`.


New interactions messaged emision to [Sendero Interaction Server](https://github.com/Sendero-Project/SenderoInteractionServer) can be developed in `public/js/interactions.js` file. Inside that file is an example of how to do so using a `mousemove` and `touchmove` JavaScript event.

--------
For more information about Sendero Project go to the [base repository](https://github.com/Sendero-Project/Sendero).