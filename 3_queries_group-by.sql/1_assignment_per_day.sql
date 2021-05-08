SELECT day, count(*) as total_assigments
FROM assignments
GROUP BY day
ORDER BY day;