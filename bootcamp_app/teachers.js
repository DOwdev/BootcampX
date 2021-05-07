const { Pool } = require('pg');

const pool = new Pool({
  user: 'Dani',
  host: 'localhost',
  database: 'bootcampx'
});

pool.query(`
    SELECT DISTINCT teachers.name as teacher, 
    cohorts.name as cohort
    FROM assistance_requests
    JOIN teachers ON teachers.id = teacher_id
    JOIN students ON students.id = student_id
    JOIN cohorts ON cohorts.id = students.cohort_id
    WHERE cohorts.name LIKE '%${process.argv[2]}%'
    ORDER BY teacher;
`)
.then(res => {
    res.rows.forEach(teach => {
        console.log(`${teach.cohort}: ${teach.teacher}`);
    });
})
.catch(err => console.error('query error', err.stack));