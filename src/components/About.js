import React from 'react'
// import noteContext from '../context/notes/noteContext'
const About = () => {
  /*
  const a = useContext(noteContext);
  useEffect(() => {
    a.update();
    // eslint-disable-next-line
  }, [])
  */
  return ( 
    <div className="container">
    <div className="row">
      <div className="col-md-8 offset-md-2 text-center">
        <h2>About iNotebook</h2>
        <p>Welcome to the enchanting realm of iNotebook, where your thoughts and ideas come to life in the digital sphere. 📝✨</p>
        <p>At iNotebook, we are driven by the belief that innovation should be met with elegance. Our web application, lovingly shaped with the power of Bootstrap, beckons you to transcribe your musings and inspirations seamlessly.</p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-6">
        <h3>Our Vision 🌄</h3>
        <p>Our vision is to offer you a virtual haven, a realm where your creativity knows no bounds. We comprehend the fleeting nature of ideas, and that's why we have crafted a platform that adapts to your whims. Whether you're a poet, an architect, a scientist, or anyone embracing the art of ideation, iNotebook stands as your accomplice on this exhilarating journey.</p>
      </div>
      <div className="col-md-6">
        <h3>Features That Dazzle 🌟</h3>
        <ul>
          <li><strong>Simplicity Redefined:</strong> Within the gentle embrace of Bootstrap, our interface exudes simplicity. It invites you to channel your energy into creativity, ensuring a seamless navigation that resonates with novices and tech-savvy alike.</li>
          <li><strong>Cross-Device Harmony:</strong> Your creative pulse shouldn't be confined to a single device. iNotebook orchestrates symphony across your devices, harmonizing your notes for fluid access, no matter where you are.</li>
          <li><strong>Tailored Organization:</strong> Minds blossom in myriad ways. iNotebook unfurls a canvas of customization with tags, folders, and labels, allowing you to sculpt your personal order amidst the digital tapestry.</li>
          <li><strong>Multimedia Poetry:</strong> Words are but a fragment of expression. Through iNotebook, you can weave images, sounds, and sketches into your notes, infusing layers of vibrancy into your thoughts.</li>
          <li><strong>Collaboration Amplified:</strong> Collaborative brilliance finds its abode here. iNotebook orchestrates real-time note sharing, paving the path for collaboration that transcends boundaries.</li>
        </ul>
      </div>
    </div>
    <div className="row">
      <div className="col-md-8 offset-md-2 text-center">
        <h3>Embark on the Odyssey 🌈</h3>
        <p>Whether you're an inventor, a philosopher, a creator, or a dreamer, iNotebook invites you to tread the path of ingenuity. Allow your thoughts to cascade, your dreams to flourish, and your imagination to ascend with our Bootstrap-infused web application.</p>
        <p>In the spirit of unity, we thank you for embracing iNotebook as your creative sanctuary. Here's to endless waves of inspiration and productivity!</p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-8 offset-md-2 text-center">
        <h3>Stay Connected</h3>
        <p>Engage with us on social media (@iNotebookApp) and become a part of our vibrant fellowship of creators. For queries and guidance, our support team is at your service: support@inotebookapp.com.</p>
        <p>Your Thoughts, Our Symphony.</p>
      </div>
    </div>
  </div>
  )
}

export default About
