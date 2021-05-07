const { Pool } = require('pg');

const pool = new Pool({
  user: 'Dani',
  host: 'localhost',
  database: 'bootcampx'
});

let cohort = process.argv[2];
let limit = process.argv[3] || 5;

const values = [`%${cohort}%`, limit];

const queryString =`
SELECT students.id as id, students.name as name, cohorts.name as cohort
FROM students
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name LIKE $1
LIMIT $2;
`;

pool.query(queryString, values)
.then(res => {
    res.rows.forEach(user => {
        console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohort} cohort`)
    })
})
.catch(err => console.error('query error', err.stack));