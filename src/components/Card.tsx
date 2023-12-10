function Card() {
  return (
    <>
      <div className="boxes">
        <div className="box cyan">
          <h3>Supervisor</h3>
          <h5>Monitors activity to identify project roadblocks</h5>
          <div className="image">
            <img
              src="./images/icon-supervisor.svg"
              alt="icon realtive to Supervisoring"
            />
          </div>
        </div>
        <div className="centerBoxes">
          <div className="box red">
            <h3>Team Builder</h3>
            <h5>
              Scans our talent network to create the optimal team for your
              project
            </h5>
            <div className="image">
              <img
                src="./images/icon-team-builder.svg"
                alt="icon realtive to team-building"
              />
            </div>
          </div>
          <div className="box orange">
            <h3>Karma</h3>
            <h5>Regularly evaluates our talent to ensure quality</h5>
            <div className="image">
              <img src="./images/icon-karma.svg" alt="icon realtive to Karma" />
            </div>
          </div>
        </div>
        <div className="box blue">
          <h3>Calculator</h3>
          <h5>
            Uses data from past projects to provide better delivery estimates
          </h5>
          <div className="image">
            <img
              src="./images/icon-calculator.svg"
              alt="icon realtive to Calculation"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
