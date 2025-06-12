/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateFreelancer() {
  const name = NAMES[getRandomInt(0, NAMES.length - 1)];
  const occupation = OCCUPATIONS[getRandomInt(0, OCCUPATIONS.length - 1)];
  const rate = getRandomInt(PRICE_RANGE.min, PRICE_RANGE.max);
  return { name, occupation, rate };
}

function averageFreelanceRate(freelancers) {
  if (freelancers.length === 0) return 0;
  const totalRate = freelancers.reduce((sum, f) => sum + f.rate, 0);
  return totalRate / freelancers.length;
}

function Freelancer({ name, occupation, rate }) {
  return (
    <div className="freelancer">
      <h3>{name}</h3>
      <p>Occupation: {occupation}</p>
      <p>Rate: ${rate}/hr</p>
    </div>
  );
}

function FreelancerList({ freelancers }) {
  return (
    <div className="freelancer-list">
      <h2>Available Freelancers</h2>
      {freelancers.map((freelancer, index) => (
        <Freelancer
          key={index}
          name={freelancer.name}
          occupation={freelancer.occupation}
          rate={freelancer.rate}
        />
      ))}
    </div>
  );
}

function AverageRate({ freelancers }) {
  if (freelancers.length === 0) {
    return <p>No freelancers available.</p>;
  }

  const average = averageFreelanceRate(freelancers).toFixed(2);
  return <h2>Average Rate: ${average}/hr</h2>;
}

export default function App() {
  const freelancers = Array.from(
    { length: NUM_FREELANCERS },
    generateFreelancer
  );

  return (
    <div>
      <h1>Freelancer Dashboard</h1>
      <AverageRate freelancers={freelancers} />
      <FreelancerList freelancers={freelancers} />
    </div>
  );
}
