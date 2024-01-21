import "./analysis.css";

function About() {
  return (
    // <div style={{margin:'auto',width:'60vh'}}>
    <div>
      <h1 style={{ color: "#279eff" }}>ECE '24 Analysis</h1>
      <p style={{ fontSize: "larger" }}>
        <iframe
          title="Placement Analysis"
          scrolling="no"
          className="sheet"
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTHnpz49dNy88ComgYEmqNfsFxWbMHsAy0R8gLn34A08yPzcXr3zJYfZEqx9wqHjgciLMsE3gF8ykSW/pubhtml?gid=1768645801&amp;single=true&amp;widget=true&amp;headers=false"
        ></iframe>
      </p>
    </div>
  );
}

export default About;
