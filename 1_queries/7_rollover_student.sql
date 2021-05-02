SELECT students.name AS name,
students.start_date AS start_date,
cohorts.name AS cohort_name, 
cohorts.start_date AS cohort_start
FROM students 
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.start_date != students.start_date;