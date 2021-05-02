SELECT students.name as student, 
avg(assignment_submissions.duration) as average_assignment_duration
FROM assignment_submissions
JOIN students ON students.id = student_id
WHERE students.end_date IS NULL
GROUP BY students.name
ORDER BY avg(assignment_submissions.duration) DESC;
