DROP DATABASE IF EXISTS portfoliomatic;

CREATE DATABASE portfoliomatic;


CREATE TABLE portfoliomatic.user(
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT ,
    firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL
);
INSERT INTO portfoliomatic.user
VALUES
    (NULL, 'faysall','sarker','faisaladnan700@gmail.com','Faysal123','12345'),
    (NULL, 'tina','mina','tinamina77100@gmail.com','mina123','12345789'),
    (NULL, 'salina','balina','kalinaa75000@gmail.com','kalina123','578900'),
    (NULL, 'John', 'Doe', 'johndoe@example.com', 'johndoe', 'password1'),
    (NULL, 'Alice', 'Johnson', 'alice@example.com', 'alicej', 'mypassword123'),
    (NULL, 'Bob', 'Smith', 'bob@example.com', 'bobsmith', 'securepassword'),
    (NULL, 'Emily', 'Wilson', 'emily@example.com', 'emilyw', 'password1234'),
    (NULL, 'David', 'Brown', 'david@example.com', 'davidb', 'brownpassword'),
    (NULL, 'Ella', 'Thomas', 'ella@example.com', 'ellat', 'password987'),
    (NULL, 'Michael', 'Lee', 'michael@example.com', 'michaellee', 'michael123'),
    (NULL, 'Sophia', 'Clark', 'sophia@example.com', 'sophiaclark', 'sophia1234'),
    (NULL, 'James', 'White', 'james@example.com', 'jameswhite', 'passwordqwerty'),
    (NULL, 'Lily', 'Harris', 'lily@example.com', 'lilyharris', 'lilypassword'),
    (NULL, 'William', 'Martin', 'william@example.com', 'william', 'password5678'),
    (NULL, 'Olivia', 'Anderson', 'olivia@example.com', 'olivia', 'password456'),
    (NULL, 'Daniel', 'Thompson', 'daniel@example.com', 'daniel123', 'password321'),
    (NULL, 'Ava', 'Jackson', 'ava@example.com', 'avaj', 'avapassword'),
    (NULL, 'Alexander', 'Wilson', 'alex@example.com', 'alexwilson', 'alex12345'),
    (NULL, 'Mia', 'Miller', 'mia@example.com', 'miamiller', 'miller123'),
    (NULL, 'Ethan', 'Anderson', 'ethan@example.com', 'ethan123', 'password9876');



CREATE TABLE portfoliomatic.cv(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    user_id INT UNSIGNED NOT NULL,
    FOREIGN KEY(user_id) REFERENCES portfoliomatic.user(id)
);

INSERT INTO portfoliomatic.cv
VALUES
    (NULL, 1),
    (NULL, 2),
    (NULL, 3),
    (NULL, 4),
    (NULL, 5),
    (NULL, 6),
    (NULL, 7),
    (NULL, 8),
    (NULL, 9),
    (NULL, 10),
    (NULL, 11),
    (NULL, 12),
    (NULL, 13),
    (NULL, 14),
    (NULL, 15),
    (NULL, 16),
    (NULL, 17),
    (NULL, 18),
    (NULL, 19),
    (NULL, 20);

    

CREATE TABLE portfoliomatic.country(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);
INSERT INTO portfoliomatic.country
VALUES
    (NULL, 'United States'),
    (NULL, 'Canada'),
    (NULL, 'United Kingdom'),
    (NULL, 'Germany'),
    (NULL, 'Australia'),
    (NULL, 'Japan'),
    (NULL, 'Brazil'),
    (NULL, 'South Korea'),
    (NULL, 'China'),
    (NULL, 'Russia'),
    (NULL, 'Mexico');

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


CREATE TABLE portfoliomatic.city(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    cv_id INT UNSIGNED NOT NULL,
    country_id INT UNSIGNED NOT NULL,
    FOREIGN KEY(cv_id) REFERENCES portfoliomatic.cv(id),
    FOREIGN KEY(country_id) REFERENCES portfoliomatic.country(id)
);
INSERT INTO portfoliomatic.city
VALUES
    (NULL,'Dhaka',1, 2),
    (NULL,'Paris',2, 5),
    (NULL,'New York', 1, 6),
    (NULL,'Los Angeles', 1,8),
    (NULL,'Paris', 2,9),
    (NULL,'London', 3,4),
    (NULL,'Mumbai', 4,7),
    (NULL,'Tokyo', 5,4),
    (NULL,'Sydney', 6,3),
    (NULL,'Rio de Janeiro', 7,3),
    (NULL,'Seoul', 8,2),
    (NULL,'Moscow', 9,1),
    (NULL,'Mexico City', 10,2),
    (NULL, 'Berlin', 4, 10),
(NULL, 'Barcelona', 5, 7),
(NULL, 'Toronto', 2, 3),
(NULL, 'Rome', 3, 6),
(NULL, 'San Francisco', 1, 9),
(NULL, 'Dubai', 6, 1),
(NULL, 'Singapore', 7, 5),
(NULL, 'Sydney', 9, 4),
(NULL, 'Amsterdam', 10, 8),
(NULL, 'San Diego', 8, 2);


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
    (NULL, 'Excellence in Leadership Award','Employee of the Month',1),
    (NULL, 'Innovator of the Year','Customer Appreciation Award',2),
    (NULL, 'Outstanding Customer Service Recognition','Teamwork Excellence Recognition',3),
    (NULL, 'Top Sales Performer', 'Highest sales numbers of the quarter', 4),
    (NULL, 'Quality Assurance Star', 'Exemplary work in ensuring product quality', 5),
    (NULL, 'Safety Champion', 'Outstanding commitment to workplace safety', 3),
    (NULL, 'Mentor of the Year', 'Exceptional guidance and support to colleagues', 3),
    (NULL, 'Rising Star', 'Remarkable progress and potential in the company', 4),
    (NULL, 'Customer Satisfaction Hero', 'Exceeding customer expectations consistently', 4),
    (NULL, 'Innovator of the Month', 'Creative solutions that drive progress', 5),
    (NULL, 'Employee of the Quarter', 'Consistent outstanding performance', 5),
    (NULL, 'Team Player Award', 'Dedication to fostering team collaboration', 6),
    (NULL, 'Customer Excellence Award', 'Delighting customers with exceptional service', 6),
    (NULL, 'Leadership in Innovation', 'Driving innovative ideas and solutions', 7),
    (NULL, 'Community Service Star', 'Commitment to giving back to the community', 7),
    (NULL, 'Problem-Solver of the Year', 'Expert in overcoming challenges', 8),
    (NULL, 'Excellence in Communication', 'Effective communication skills', 8),
    (NULL, 'Professional Growth Award', 'Continual professional development and growth', 9),
    (NULL, 'Sustainability Champion', 'Advocating for eco-friendly practices', 9),
    (NULL, 'Best Team Lead', 'Exceptional leadership and guidance', 10);



CREATE TABLE portfoliomatic.skills(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    cv_id INT UNSIGNED NOT NULL,
    FOREIGN KEY(cv_id) REFERENCES portfoliomatic.cv(id)
);
INSERT INTO portfoliomatic.skills
VALUES
    (NULL, 'Problem Solving','1'),
    (NULL, 'Leadership','2'),
    (NULL, 'Programming','3'),
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
    data_end VARCHAR(50) NOT NULL,
    details VARCHAR(255) NOT NULL,
    cv_id INT UNSIGNED NOT NULL,
    city_id INT UNSIGNED NOT NULL,
    FOREIGN KEY(city_id) REFERENCES portfoliomatic.city(id),
    FOREIGN KEY(cv_id) REFERENCES portfoliomatic.cv(id)
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
    (NULL, 'Pernod Ricard','14-01-23', '01-01-2024','Project Manager',1, 5),
    (NULL, 'simplon limited','14-01-23', '01-01-2024','Sales Representative',2, 3),
    (NULL, 'Apple Inc.', '14-01-23', '01-01-2024', 'Software Engineer', 3, 9),
    (NULL, 'Amazon.com', '14-01-23', '01-01-2024', 'Marketing Manager', 4, 7),
    (NULL, 'Microsoft Corporation', '14-01-23', '01-01-2024', 'Product Designer', 5, 2),
    (NULL, 'Google LLC', '14-01-23', '01-01-2024', 'Data Scientist', 6, 8),
    (NULL, 'Tesla, Inc.', '14-01-23', '01-01-2024', 'Electrical Engineer', 7, 4),
    (NULL, 'Facebook, Inc.', '14-01-23', '01-01-2024', 'Content Creator', 8, 6),
    (NULL, 'IBM', '14-01-23', '01-01-2024', 'Business Analyst', 9, 10),
    (NULL, 'Intel Corporation', '14-01-23', '01-01-2024', 'Quality Assurance Engineer', 10, 1),
    (NULL, 'Walmart Inc.', '14-01-23', '01-01-2024', 'Store Manager', 1, 5),
    (NULL, 'Johnson & Johnson', '14-01-23', '01-01-2024', 'Pharmaceutical Researcher', 2, 3),
    (NULL, 'Oracle Corporation', '14-01-23', '01-01-2024', 'Database Administrator', 3, 9),
    (NULL, 'Netflix, Inc.', '14-01-23', '01-01-2024', 'Content Writer', 4, 7),
    (NULL, 'Twitter, Inc.', '14-01-23', '01-01-2024', 'Social Media Manager', 5, 2),
    (NULL, 'Uber Technologies, Inc.', '14-01-23', '01-01-2024', 'Driver Partner', 6, 8),
    (NULL, 'General Electric', '14-01-23', '01-01-2024', 'Mechanical Engineer', 7, 4),
    (NULL, 'Procter & Gamble', '14-01-23', '01-01-2024', 'Product Manager', 8, 6),
    (NULL, 'Cisco Systems', '14-01-23', '01-01-2024', 'Network Engineer', 9, 10),(NULL, 'Verizon Communications', '14-01-23', '01-01-2024', 'Customer Service Representative', 10, 1);

