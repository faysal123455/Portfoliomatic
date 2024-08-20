-- SELECT u.id AS user_id, u.firstname, u.lastname, u.email, u.skill, u.education, u.work
-- FROM cv c
-- JOIN user u ON c.user_id = u.id
-- WHERE c.id = 2;

SELECT cv.*, education.*,work.*
FROM cv
JOIN education ON education.cv_id = cv.id
JOIN work ON work.cv_id = cv.id
WHERE cv.id = 1;
