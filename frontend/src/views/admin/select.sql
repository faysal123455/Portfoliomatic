 select
        cv.*,
        summary.goal,
        contact.Telephone,
        contact.social_media1,
        contact.social_media2,
        GROUP_CONCAT(DISTINCT language.id) AS languages_ids,
        GROUP_CONCAT(DISTINCT skill.id) AS skills_ids,
        GROUP_CONCAT(DISTINCT archivment.id) AS archivments_ids,
        GROUP_CONCAT(DISTINCT education.id) AS educations_ids,
        GROUP_CONCAT(DISTINCT work.id) AS works_ids
    from cv
    left join language on language.cv_id = cv.id
    left join summary on summary.cv_id = cv.id
    left join skill on skill.cv_id = cv.id
    left join archivment on archivment.cv_id = cv.id
    left join education on education.cv_id = cv.id
    left join work on work.cv_id = cv.id
    left join contact on contact.cv_id = cv.id
    where cv.id = 34
    GROUP BY cv.id, summary.goal, contact.id;

INSERT INTO portfoliomatic.language
VALUES (NULL, 'lang1', 'good', 34),
(NULL, 'lang2', 'good', 34);

INSERT INTO portfoliomatic.archivment
VALUES (NULL, 'archivment1', 'employee of the year', 34),
(NULL, 'archivment2', 'employee of the month', 34);

INSERT INTO portfoliomatic.education
VALUES (NULL, 'simplon1', '2024-01-01', '2024-03-01', 'diploma1 the basic acccount', 34, 1),
(NULL, 'simplon2', '2024-02-01', '2024-03-01', 'diploma2', 34, 2);

INSERT INTO portfoliomatic.work
VALUES (NULL, 'company1', 'job1', '2024-02-01', '2024-03-01', 34, 1),
(NULL, 'company2', 'job2', '2024-03-01', '2024-04-01', 34, 2);

INSERT INTO portfoliomatic.skill
VALUES (NULL, 'skill1', 34),
(NULL, 'skill2', 34);

INSERT INTO portfoliomatic.contact
VALUES (NULL, '06 62 06 40 83','faysalsarker@gmail.com','faysalsarker12345', 34);




SELECT work.*, city.name AS city, country.name AS country
FROM portfoliomatic.work
JOIN portfoliomatic.city
ON city.id = work.city_id
JOIN portfoliomatic.country
ON country.id = city.country_id
WHERE work.id IN(21,22);

 SELECT education.*, city.name AS city, country.name AS country
    FROM portfoliomatic.education
    JOIN portfoliomatic.city
    ON city.id = education.city_id
    JOIN portfoliomatic.country
    ON country.id = city.country_id
    WHERE education.id IN(${listIds});`