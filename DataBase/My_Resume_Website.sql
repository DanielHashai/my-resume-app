-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 06, 2023 at 12:22 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `My_Resume_Website`
--

-- --------------------------------------------------------

--
-- Table structure for table `experience`
--

CREATE TABLE `experience` (
  `experienceId` int(11) NOT NULL,
  `topic` varchar(50) NOT NULL,
  `role` varchar(50) NOT NULL,
  `detail` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `experience`
--

INSERT INTO `experience` (`experienceId`, `topic`, `role`, `detail`) VALUES
(1, 'frontend and backend website architecture', 'Services', 'Web-Services + REST + AJAX ,  Javascript/TypeScript Server Side , Spring Cloud Microservices'),
(2, 'Cross-platform optimization for mobile phones', 'UI/UX Designer', 'Bootstrap , CSS , SCSS , MATERIAL UI'),
(3, 'Skills', 'Development Tools', 'HTML, HTML5, CSS, +CSS3, +SASS, JavaScript, MySQL, JAVA, React.js, Angular, PHP, MongoDB, JQuery');

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `projectId` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `imageName` varchar(200) NOT NULL,
  `link` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`projectId`, `name`, `imageName`, `link`) VALUES
(4, 'Crypto App', '60a99165-517a-410c-98c0-2a51105fa895.png', 'https://github.com/DanielHashai/crypto-website.git'),
(5, 'Vacation App', '2f727a10-a6fc-4c03-942c-a96e9eb906bc.png', 'https://github.com/DanielHashai/booking-vacation-website.git'),
(6, 'Notes App', 'd59c9050-546c-4800-9f42-acbb99b0b2ce.png', 'https://github.com/DanielHashai/Notes-website.git');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `experience`
--
ALTER TABLE `experience`
  ADD PRIMARY KEY (`experienceId`);

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`projectId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `experience`
--
ALTER TABLE `experience`
  MODIFY `experienceId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `projectId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
