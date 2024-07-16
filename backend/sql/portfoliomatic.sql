DROP DATABASE IF EXISTS portfoliomatic;

CREATE DATABASE portfoliomatic;


CREATE TABLE portfoliomatic.user(
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT ,
    firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

INSERT INTO portfoliomatic.user
VALUES
    (NULL, 'faysall','sarker','faisaladnan700@gmail.com','$argon2i$v=19$m=16,t=2,p=1$UlFFcDVDRmJ5dHJFYTdKYQ$mdpqwcU7ktM0CZP3UFwnLg'),
    (NULL, 'tina1','mina','tinamina77100@gmail.com','$argon2i$v=19$m=16,t=2,p=1$RUtOeGQxSmlOcmRCTlZHOA$Ho/uoAUQWzs1xzDApjcEIw'),
    (NULL, 'salina1','balina','kalinaa75000@gmail.com','$argon2i$v=19$m=16,t=2,p=1$QkkwdXRsTVZvT3NNelp1Vg$z+dTlbX6iQQDcoTizN0M1Q'),
    (NULL, 'John1', 'Doe', 'johndoe@example.com', '$argon2i$v=19$m=16,t=2,p=1$eFhwaldpM3AxMVdJN2RKTA$7aO42gs4TdbjsaJgKujVXg'),
    (NULL, 'Alice1', 'Johnson', 'alice@example.com', '$argon2i$v=19$m=16,t=2,p=1$R1diRHJDRnVIb0FCT243Zw$SyWMrOvsRlmqYOZzjNMAsA'),
    (NULL, 'Bob1', 'Smith', 'bob@example.com', '$argon2i$v=19$m=16,t=2,p=1$cnp0VlRyNWNsaVhGam1NSg$AMw9IO9aRzrKFgqK/JFMNQ'),
    (NULL, 'Emily1', 'Wilson', 'emily@example.com', '$argon2i$v=19$m=16,t=2,p=1$SlZHWmNjNUNZQW05eVVNeg$JoI2cW0O92fB6ZGO9W9bpw'),
    (NULL, 'David1', 'Brown', 'david@example.com', '$argon2i$v=19$m=16,t=2,p=1$NWdCMjNuWVNjT3NrZkRXVQ$/628/56nWsgDsl2EPA2zrA'),
    (NULL, 'Ella1', 'Thomas', 'ella@example.com', '$argon2i$v=19$m=16,t=2,p=1$ZGo2b1VmenNzYnpBdDcxZg$oYujVQSFAqMqXG1OBsjMPw'),
    (NULL, 'Michael1', 'Lee', 'michael@example.com', '$argon2i$v=19$m=16,t=2,p=1$MWdKbXFrc2lOOGlBSmRrNg$9CAjERm07vcpeivT8KrG7A'),
    (NULL, 'Sophia1', 'Clark', 'sophia@example.com', '$argon2i$v=19$m=16,t=2,p=1$QlpjVmRtaEhFblJ1MVdwdA$yPCZ0N3KDStd3D5sFfnZkQ'),
    (NULL, 'James1', 'White', 'james@example.com', '$argon2i$v=19$m=16,t=2,p=1$WnFTOTFab08xeDBVeUg4ag$DUERzmA7IksyJm4uGrmC6w'),
    (NULL, 'Lily1', 'Harris', 'lily@example.com', '$argon2i$v=19$m=16,t=2,p=1$N2h5Nk9xUzF4eVpHTm95dg$6n7Jr3Z6TvB0fHU0SFun+Q'),
    (NULL, 'William1', 'Martin', 'william@example.com', '$argon2i$v=19$m=16,t=2,p=1$ZFlEZlRpT29kNm12eGZOdA$zJaBRpjRCiZ2KxhDxW4qGA'),
    (NULL, 'Olivia1', 'Anderson', 'olivia@example.com', '$argon2i$v=19$m=16,t=2,p=1$RDNhcE9YeENzcHRQR3hxUA$MwbTSfDocvKq855CcVvogg'),
    (NULL, 'Daniel1', 'Thompson', 'daniel@example.com', '$argon2i$v=19$m=16,t=2,p=1$NHBVWnEzT0plaENBS0xLbQ$bjIs+mdmEm8+iF2mplfd+g'),
    (NULL, 'Ava1', 'Jackson', 'ava@example.com', '$argon2i$v=19$m=16,t=2,p=1$S2x5d25aOE5DOEY3QUp6Vw$8g5aWbfBWzGPJ5DiCBpitA'),
    (NULL, 'Alexander1', 'Wilson', 'alex@example.com', '$argon2i$v=19$m=16,t=2,p=1$emJmc1Q3dXZLRHFNaDNkMw$TORRjBImzlR1yvRaIFM/IQ'),
    (NULL, 'Mia1', 'Miller', 'mia@example.com', '$argon2i$v=19$m=16,t=2,p=1$dXVQUVVhYUVUeXVNTGk3Wg$/fGY/vdmxAC2AekqFk1FUg'),
    (NULL, 'Ethan1', 'Anderson', 'ethan@example.com', '$argon2i$v=19$m=16,t=2,p=1$aWhmTGFLTGlncFRyRlpNQQ$kIhjFT53ZUy5vWx27QnIHw');



CREATE TABLE portfoliomatic.cv(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(50) NOT NULL,
    prenom VARCHAR(50) NOT NULL,
    image VARCHAR(100),
    user_id INT UNSIGNED NOT NULL,
    FOREIGN KEY(user_id) REFERENCES portfoliomatic.user(id)
);

INSERT INTO portfoliomatic.cv
VALUES
    (NULL, 'fofo2', 'fofo','fofo.jpg', 1),
    (NULL, 'fofo2', 'fofo','fofo.jpg', 2),
    (NULL, 'fofo2', 'fofo','fofo.jpg', 3),
    (NULL, 'fofo2', 'fofo','fofo.jpg', 4),
    (NULL, 'fofo2', 'fofo','fofo.jpg', 5),
    (NULL, 'fofo2', 'fofo','fofo.jpg', 6),
    (NULL, 'fofo2', 'fofo','fofo.jpg', 7),
    (NULL, 'fofo2', 'fofo','fofo.jpg', 8),
    (NULL, 'fofo2', 'fofo','fofo.jpg', 9),
    (NULL, 'fofo2', 'fofo','fofo.jpg', 10),
    (NULL, 'fofo2', 'fofo','fofo.jpg', 11),
    (NULL, 'fofo2', 'fofo','fofo.jpg', 12),
    (NULL, 'fofo2', 'fofo','fofo.jpg', 13),
    (NULL, 'fofo2', 'fofo','fofo.jpg', 14),
    (NULL, 'fofo2', 'fofo','fofo.jpg', 15),
    (NULL, 'fofo2', 'fofo','fofo.jpg', 16),
    (NULL, 'fofo2', 'fofo','fofo.jpg', 17),
    (NULL, 'fofo2', 'fofo','fofo.jpg', 18),
    (NULL, 'fofo2', 'fofo','fofo.jpg', 19),
    (NULL, 'fofo2', 'fofo','fofo.jpg', 20);

    

CREATE TABLE portfoliomatic.country(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);
INSERT INTO portfoliomatic.country
VALUES
    (NULL, 'United States'),
    (NULL, 'france'),
    (NULL, 'United Kingdom'),
    (NULL, 'Germany'),
    (NULL, 'spain'),
    (NULL, 'bangladesh'),
    (NULL, 'Brazil'),
    (NULL, 'italy'),
    (NULL, 'China'),
    (NULL, 'Russia'),
    (NULL, 'Mexico');



CREATE TABLE portfoliomatic.city(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    country_id INT UNSIGNED NOT NULL,
    cv_id INT UNSIGNED NOT NULL,
    FOREIGN KEY(cv_id) REFERENCES portfoliomatic.cv(id),
    FOREIGN KEY(country_id) REFERENCES portfoliomatic.country(id)
);
INSERT INTO portfoliomatic.city
VALUES
    (NULL, 'New York', 1, 1),
    (NULL, 'Los Angeles', 1, 2),
    (NULL, 'Paris', 2, 3),
    (NULL, 'Lyon', 2, 4),
    (NULL, 'London', 3, 5),
    (NULL, 'Manchester', 3, 6),
    (NULL, 'Berlin', 4, 7),
    (NULL, 'Munich', 4, 8),
    (NULL, 'Madrid', 5, 9),
    (NULL, 'Barcelona', 5, 10),
    (NULL, 'Dhaka', 6, 1),
    (NULL, 'Chittagong', 6, 2),
    (NULL, 'Rio de Janeiro', 7, 3),
    (NULL, 'Fortaleza', 7, 4),
    (NULL, 'Rome', 8, 5),
    (NULL, 'Milan', 8, 6),
    (NULL, 'Beijing', 9, 7),
    (NULL, 'Shanghai', 9, 8),
    (NULL, 'Moscow', 10, 9),
    (NULL, 'Saint Petersburg', 10, 10),
    (NULL, 'Mexico City', 11, 1),
    (NULL, 'Guadalajara', 11, 2);




CREATE TABLE portfoliomatic.contact(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    Telephone VARCHAR (50),
    social_media1 VARCHAR(50) NOT NULL,
    social_media2 VARCHAR(50) NOT NULL,
    cv_id INT UNSIGNED NOT NULL,
    FOREIGN KEY(cv_id) REFERENCES portfoliomatic.cv(id)
);
INSERT INTO portfoliomatic.contact
VALUES
    (NULL, '555-123-4567', 'linkedin.com/smith', 'twitter.com/janedoe', 1),
    (NULL, '555-987-6543', 'linkedin.com/johndoe', 'twitter.com/susanjane', 2),
    (NULL, '555-789-1234', 'linkedin.com/michael', 'twitter.com/mikemike', 3),
    (NULL, '555-234-5678', 'linkedin.com/laurasmith', 'twitter.com/lauralaura', 4),
    (NULL, '555-876-5432', 'linkedin.com/robert', 'twitter.com/robertrobert', 5),
    (NULL, '555-456-7890', 'linkedin.com/emily', 'twitter.com/emilyemily', 6),
    (NULL, '555-765-4321', 'linkedin.com/william', 'twitter.com/williamwilliam', 7),
    (NULL, '555-345-6789', 'linkedin.com/jennifer', 'twitter.com/jenniferjennifer', 8),
    (NULL, '555-654-3210', 'linkedin.com/daniel', 'twitter.com/danieldaniel', 9),
    (NULL, '555-678-9012', 'linkedin.com/olivia', 'twitter.com/oliviaolivia', 10),
    (NULL, '555-111-2222', 'linkedin.com/andrew', 'twitter.com/andrewandrew', 11),
    (NULL, '555-333-4444', 'linkedin.com/sarah', 'twitter.com/sarahsarah', 12),
    (NULL, '555-555-6666', 'linkedin.com/ryan', 'twitter.com/ryanryan', 13),
    (NULL, '555-777-8888', 'linkedin.com/lisa', 'twitter.com/lisalisa', 14),
    (NULL, '555-999-0000', 'linkedin.com/kevin', 'twitter.com/kevinkevin', 15),
    (NULL, '555-222-3333', 'linkedin.com/megan', 'twitter.com/meganmegan', 16),
    (NULL, '555-444-5555', 'linkedin.com/chris', 'twitter.com/chrischris', 17),
    (NULL, '555-666-7777', 'linkedin.com/ashley', 'twitter.com/ashleyashley', 18),
    (NULL, '555-888-9999', 'linkedin.com/mark', 'twitter.com/markmark', 19),
    (NULL, '555-000-1111', 'linkedin.com/sophia', 'twitter.com/sophiasophia', 20);



CREATE TABLE portfoliomatic.summary(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    goal TEXT NOT NULL,
    cv_id INT UNSIGNED NOT NULL,
    FOREIGN KEY(cv_id) REFERENCES portfoliomatic.cv(id)
);
INSERT INTO portfoliomatic.summary
VALUES
    (NULL, 'Highly motivated [Job Title] with [X] years of experience. Skilled in [Key Skills]. Proven track record of [Notable Achievements]. Seeking new challenges to drive success in a dynamic organization.',1),
    (NULL, 'Experienced [Job Title] with expertise in [Key Skills]. Proven success in [Achievements]. A dedicated professional seeking opportunities to make a meaningful impact and drive results.',2),
    (NULL, 'Result-oriented [Job Title] with [X] years of experience. Proficient in [Key Skills] and delivering [Achievements]. Passionate about innovation and eager to contribute to a dynamic team for mutual growth and success.',3),
    (NULL, 'Dynamic and creative [Job Title] with [X] years of experience. Adept at [Key Skills] and proud of my [Achievements]. Committed to delivering excellence and driving positive outcomes for my team.', 4),
    (NULL, 'Innovative [Job Title] with [X] years of experience in [Key Skills]. Proven history of [Achievements]. Eager to tackle new challenges and contribute to a forward-thinking organization for mutual success.', 5),
    (NULL, 'Results-driven [Job Title] with [X] years of experience. Expertise in [Key Skills] and a track record of [Achievements]. Dedicated to continuous improvement and excited to join a dynamic team to make a meaningful impact.', 6),
    (NULL, 'Adaptable [Job Title] with [X] years of experience. Proficient in [Key Skills] and recognized for [Achievements]. Enthusiastic about embracing new opportunities and driving positive change.', 7),
    (NULL, 'Skilled and motivated [Job Title] with [X] years of experience. Exceptional in [Key Skills] and celebrated for [Achievements]. Ready to contribute my expertise to a dynamic organization and achieve shared success.', 8),
    (NULL, 'Seasoned [Job Title] with [X] years of experience. Proficient in [Key Skills] and proud of my [Achievements]. Committed to adding value and contributing to a team-driven approach in a dynamic organization.', 9),
    (NULL, 'Resourceful [Job Title] with [X] years of experience. Adept in [Key Skills] and a history of [Achievements]. Passionate about innovation and eager to join a team focused on driving positive change.', 10);


CREATE TABLE portfoliomatic.language(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    level VARCHAR(50) NOT NULL,
    cv_id INT UNSIGNED NOT NULL,
    FOREIGN KEY(cv_id) REFERENCES portfoliomatic.cv(id)
);
INSERT INTO portfoliomatic.language
VALUES
    (NULL, 'Spanish','Beginner',1),
    (NULL, 'English','Advanced',2),
    (NULL, 'French','Intermediate',3),
    (NULL, 'German', 'Intermediate', 4),
    (NULL, 'Italian', 'Advanced', 5),
    (NULL, 'Chinese', 'Beginner', 6),
    (NULL, 'Japanese', 'Advanced', 7),
    (NULL, 'Russian', 'Intermediate', 8),
    (NULL, 'Arabic', 'Beginner', 9),
    (NULL, 'Portuguese', 'Advanced', 10);


CREATE TABLE portfoliomatic.archivment(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    recognitation VARCHAR(50) NOT NULL,
    cv_id INT UNSIGNED NOT NULL,
    FOREIGN KEY(cv_id) REFERENCES portfoliomatic.cv(id)
);
INSERT INTO portfoliomatic.archivment
VALUES
    (NULL, 'Excellence in Leadership Award', 'Employee of the Month', 1),
    (NULL, 'Innovator of the Year', 'Customer Appreciation Award', 2),
    (NULL, 'Outstanding Customer Service Recognition', 'Teamwork Excellence Recognition', 3),
    (NULL, 'Top Sales Performer', 'Highest sales numbers of the quarter', 4),
    (NULL, 'Quality Assurance Star', 'Exemplary work in ensuring product quality', 5),
    (NULL, 'Safety Champion', 'Outstanding commitment to workplace safety', 6),
    (NULL, 'Mentor of the Year', 'Exceptional guidance and support to colleagues', 7),
    (NULL, 'Rising Star', 'Remarkable progress and potential in the company', 8),
    (NULL, 'Customer Satisfaction Hero', 'Exceeding customer expectations consistently', 9),
    (NULL, 'Innovator of the Month', 'Creative solutions that drive progress', 10),
    (NULL, 'Employee of the Quarter', 'Consistent outstanding performance', 11),
    (NULL, 'Team Player Award', 'Dedication to fostering team collaboration', 12),
    (NULL, 'Customer Excellence Award', 'Delighting customers with exceptional service', 13),
    (NULL, 'Leadership in Innovation', 'Driving innovative ideas and solutions', 14),
    (NULL, 'Community Service Star', 'Commitment to giving back to the community', 15),
    (NULL, 'Problem-Solver of the Year', 'Expert in overcoming challenges', 16),
    (NULL, 'Excellence in Communication', 'Effective communication skills', 17),
    (NULL, 'Professional Growth Award', 'Continual professional development and growth', 18),
    (NULL, 'Sustainability Champion', 'Advocating for eco-friendly practices', 19),
    (NULL, 'Best Team Lead', 'Exceptional leadership and guidance', 20);


CREATE TABLE portfoliomatic.skill(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    cv_id INT UNSIGNED NOT NULL,
    FOREIGN KEY(cv_id) REFERENCES portfoliomatic.cv(id)
);
INSERT INTO portfoliomatic.skill
VALUES
    (NULL, 'Problem Solving',1),
    (NULL, 'Leadership',1),
    (NULL, 'Programming',1),
    (NULL, 'Leadership',2),
    (NULL, 'Programming',3),
    (NULL, 'Communication', 4),
    (NULL, 'Creativity', 5),
    (NULL, 'Time Management', 6),
    (NULL, 'Adaptability', 7),
    (NULL, 'Teamwork', 8),
    (NULL, 'Problem Solving', 9),
    (NULL, 'Leadership', 10);


CREATE TABLE portfoliomatic.education(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    date_start VARCHAR(50) NOT NULL,
    date_end VARCHAR(50) NOT NULL,
    details VARCHAR(255),
    cv_id INT UNSIGNED NOT NULL,
    city_id INT UNSIGNED NOT NULL,
    FOREIGN KEY(cv_id) REFERENCES portfoliomatic.cv(id),
    FOREIGN KEY(city_id) REFERENCES portfoliomatic.city(id)
);
INSERT INTO portfoliomatic.education
VALUES
    (NULL, 'simplon university', '06-07-22', '01-01-2024','Diploma in Hospitality Management',1, 3),
    (NULL, 'Harvard University', '06-07-22', '01-01-2024','Diploma in Information Technology',2, 5),
    (NULL, 'Stanford University', '06-07-22', '01-01-2024','Diploma in Business Administration',3, 9),
    (NULL, 'Oxford University', '06-07-22', '01-01-2024', 'Diploma in English Literature', 4, 7),
    (NULL, 'MIT (Massachusetts Institute of Technology)', '06-07-22', '01-01-2024', 'Diploma in Computer Science', 5, 2),
    (NULL, 'Yale University', '06-07-22', '01-01-2024', 'Diploma in Economics', 6, 8),
    (NULL, 'Cambridge University', '06-07-22', '01-01-2024', 'Diploma in Physics', 7, 4),
    (NULL, 'Princeton University', '06-07-22', '01-01-2024', 'Diploma in Mathematics', 8, 6),
    (NULL, 'Columbia University', '06-07-22', '01-01-2024', 'Diploma in History', 9, 10),
    (NULL, 'Berkeley University', '06-07-22', '01-01-2024', 'Diploma in Environmental Science', 10, 1);



CREATE TABLE portfoliomatic.work(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    company_name VARCHAR(50) NOT NULL,
    job_title VARCHAR(50) NOT NULL,
    date_start VARCHAR(50) NOT NULL,
    date_end VARCHAR(50) NOT NULL,
    cv_id INT UNSIGNED NOT NULL,
    city_id INT UNSIGNED NOT NULL,
    FOREIGN KEY(cv_id) REFERENCES portfoliomatic.cv(id),
    FOREIGN KEY(city_id) REFERENCES portfoliomatic.city(id)
);
INSERT INTO portfoliomatic.work
VALUES
    (NULL, 'Pernod Ricard', 'Project Manager', '14-01-23', '01-01-2024', 1, 5),
    (NULL, 'simplon limited', 'Sales Representative', '14-01-23', '01-01-2024', 2, 3),
    (NULL, 'Apple Inc.', 'Software Engineer', '14-01-23', '01-01-2024', 3, 9),
    (NULL, 'Amazon.com', 'Marketing Manager', '14-01-23', '01-01-2024', 4, 7),
    (NULL, 'Microsoft Corporation', 'Product Designer', '14-01-23', '01-01-2024', 5, 2),
    (NULL, 'Google LLC', 'Data Scientist', '14-01-23', '01-01-2024', 6, 8),
    (NULL, 'Tesla, Inc.', 'Electrical Engineer', '14-01-23', '01-01-2024', 7, 4),
    (NULL, 'Facebook, Inc.', 'Content Creator', '14-01-23', '01-01-2024', 8, 6),
    (NULL, 'IBM', 'Business Analyst', '14-01-23', '01-01-2024', 9, 10),
    (NULL, 'Intel Corporation', 'Quality Assurance Engineer', '14-01-23', '01-01-2024', 10, 1),
    (NULL, 'Walmart Inc.', 'Store Manager', '14-01-23', '01-01-2024', 1, 5),
    (NULL, 'Johnson & Johnson', 'Pharmaceutical Researcher', '14-01-23', '01-01-2024', 2, 3),
    (NULL, 'Oracle Corporation', 'Database Administrator', '14-01-23', '01-01-2024', 3, 9),
    (NULL, 'Netflix, Inc.', 'Content Writer', '14-01-23', '01-01-2024', 4, 7),
    (NULL, 'Twitter, Inc.', 'Social Media Manager', '14-01-23', '01-01-2024', 5, 2),
    (NULL, 'Uber Technologies, Inc.', 'Driver Partner', '14-01-23', '01-01-2024', 6, 8),
    (NULL, 'General Electric', 'Mechanical Engineer', '14-01-23', '01-01-2024', 7, 4),
    (NULL, 'Procter & Gamble', 'Product Manager', '14-01-23', '01-01-2024', 8, 6),
    (NULL, 'Cisco Systems', 'Network Engineer', '14-01-23', '01-01-2024', 9, 10),
    (NULL, 'Verizon Communications', 'Customer Service Representative', '14-01-23', '01-01-2024', 10, 1);



