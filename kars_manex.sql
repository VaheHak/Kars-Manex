-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Апр 02 2021 г., 02:30
-- Версия сервера: 10.4.17-MariaDB
-- Версия PHP: 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `kars_manex`
--

-- --------------------------------------------------------

--
-- Структура таблицы `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `login` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `admin`
--

INSERT INTO `admin` (`id`, `login`, `password`) VALUES
(1, '66059a527018b32e4597dd27574929f6', '*D6D79CB3C9DC8DD87A004A6642B94F47361E3246');

-- --------------------------------------------------------

--
-- Структура таблицы `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `c_name` varchar(255) NOT NULL,
  `icon` varchar(255) NOT NULL,
  `link` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `category`
--

INSERT INTO `category` (`id`, `c_name`, `icon`, `link`) VALUES
(1, 'Անշարժ գույք', '1.', 'house'),
(2, 'Տրանսպորտ', '2.', 'cars'),
(3, 'Շինարարական Աշխատանքներ', '3.', 'construction');

-- --------------------------------------------------------

--
-- Структура таблицы `category_department`
--

CREATE TABLE `category_department` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `c_name` varchar(255) NOT NULL,
  `c_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `category_department`
--

INSERT INTO `category_department` (`id`, `name`, `c_name`, `c_id`) VALUES
(1, 'Վաճառք', 'ceil', 1),
(2, 'Ավտոմեքենաներ', 'car', 2),
(3, 'Շինարարություն', 'built', 3),
(4, 'Մոտոցիկլներ', 'moto', 2),
(5, 'Հեծանիվներ', 'bicycle ', 2),
(6, 'Կոմերցիոն տրանսպորտ', 'bus', 2),
(7, 'Վարձակալություն', 'rent', 1),
(8, 'Վաճառք', 'ceil_materials ', 3);

-- --------------------------------------------------------

--
-- Структура таблицы `category_section`
--

CREATE TABLE `category_section` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `category_name` varchar(255) NOT NULL,
  `category_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `category_section`
--

INSERT INTO `category_section` (`id`, `name`, `category_name`, `category_id`) VALUES
(1, 'Բնակարաններ', 'ceil', 1),
(2, 'Տներ', 'ceil', 1),
(3, 'Հողատարածք', 'ceil', 1),
(4, 'Կոմերցիոն', 'ceil', 1),
(5, 'Ավտոտնակներ և կայանատեղի', 'ceil', 1),
(6, 'Բնակարաններ', 'rent', 7),
(7, 'Տներ', 'rent', 7),
(8, 'Կոմերցիոն', 'rent', 7),
(9, 'Ավտոտնակներ և կայանատեղի', 'rent', 7),
(10, 'Ավտոմեքենաներ', 'car', 2),
(11, 'Պահեստամասեր', 'car', 2),
(12, 'Մոտոցիկլներ', 'moto', 4),
(13, 'Պահեստամասեր և աքսեսուարներ', 'moto', 4),
(14, 'Հեծանիվներ', 'vehicle', 5),
(15, 'Պահեստամասեր և աքսեսուարներ', 'vehicle', 5),
(16, 'Բեռնատարներ', 'bus', 6),
(17, 'Ավտոբուսներ', 'bus', 6),
(18, 'Գյուղատնտեսական տեխնիկա', 'bus', 6),
(19, 'Շինարարական և ծանր տեխնիկա', 'bus', 6),
(20, 'Պահեստամասեր և աքսեսուարներ', 'bus', 6),
(21, 'Շինարարություն', 'built', 3);

-- --------------------------------------------------------

--
-- Структура таблицы `currency`
--

CREATE TABLE `currency` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `value` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `currency`
--

INSERT INTO `currency` (`id`, `name`, `value`) VALUES
(1, 'ԱՄԴ', 'AMD'),
(2, 'USD', 'USD'),
(3, 'РУБ', 'RUB');

-- --------------------------------------------------------

--
-- Структура таблицы `header_menu`
--

CREATE TABLE `header_menu` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `link` varchar(255) NOT NULL,
  `page_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `header_menu`
--

INSERT INTO `header_menu` (`id`, `name`, `link`, `page_id`) VALUES
(1, 'Գլխավոր', 'home', 0),
(2, 'Անշարժ գույք', 'house', 1),
(3, 'Տրանսպորտ', 'cars', 2),
(4, 'Շինարարական Աշխատանքներ', 'construction', 3),
(5, 'ՄԵր Մասին', 'aboutUs', 4),
(6, 'Կապ', 'contact', 5);

-- --------------------------------------------------------

--
-- Структура таблицы `products`
--

CREATE TABLE `products` (
  `id` bigint(50) NOT NULL,
  `p_name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `phone` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `p_pictures` varchar(255) DEFAULT NULL,
  `price` int(11) NOT NULL,
  `description` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `category_id` int(11) NOT NULL,
  `c_department` varchar(255) NOT NULL,
  `c_section` int(11) NOT NULL,
  `building_type` varchar(255) NOT NULL,
  `new_built` tinyint(1) DEFAULT NULL,
  `floor` int(11) NOT NULL,
  `room_numbers` int(11) NOT NULL,
  `bathRoom_numbers` int(11) NOT NULL,
  `area` varchar(255) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `star` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `products`
--

INSERT INTO `products` (`id`, `p_name`, `address`, `phone`, `email`, `image`, `p_pictures`, `price`, `description`, `location`, `category_id`, `c_department`, `c_section`, `building_type`, `new_built`, `floor`, `room_numbers`, `bathRoom_numbers`, `area`, `user_id`, `star`, `createdAt`, `updatedAt`) VALUES
(1, 'AA933', 'Ղորղանյան փողոց', 2147483647, '', '', '', 65818400, 'Գեղեցիկ վերանորոգմամբ և առանձնացված բակով առանձնատուն քաղաքի կենտրոնական հատվածում․․․        Առկա է ավտոտնակ՝ 47ք․մ․ մակերեսով,\r\n\r\nՈւնի մեծ նկուղ՝ առանձնատան գրեթե ողջ մակերեսով   ', 'Գյումրի', 1, '1', 1, 'Վերանորոգված ', 0, 0, 3, 0, '105 ք․մ․', 0, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'Home', '', 0, '', '', '', 150000, '', 'Գյումրի', 1, '', 0, 'Վերանորոգված ', 0, 0, 0, 0, '0', 0, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 'Car', '', 0, '', '', '', 30000, '', 'Գյումրի', 0, '', 0, 'Վերանորոգված ', 0, 0, 0, 0, '0', 0, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 'Home', '', 0, '', '', '', 150000, '', 'Գյումրի', 0, '', 0, 'Վերանորոգված ', 0, 0, 0, 0, '0', 0, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 'asda', 'asdasda', 1231231, '1231231', 'asdas@asd.ru', 'C:\\fakepath\\bg-user.jpg', 0, 'asdasdasda', 'asda', 1, '', 1, 'asdas', 0, 4, 2, 1, '122', 0, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, 'asda', 'asdasda', 1231231, '1231231', 'asdas@asd.ru', 'C:\\fakepath\\bg-user.jpg', 0, 'asdasdasda', 'asda', 1, '', 1, 'asdas', 0, 4, 2, 1, '122', 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(7, 'asda', 'asda', 1231, '1243123123', 'asdasa', 'C:\\fakepath\\bg-user.jpg', 0, 'asdasdasdasdadsad', 'asda', 1, '', 1, 'asda', 1, 4, 2, 1, '122', 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(8, 'asda', 'asdasda', 1231231, 'asdasd', 'C:\\fakepath\\bg-user.jpg', 'C:\\fakepath\\banner.jpg', 32111111, 'sadasdasdasdasdasdas', 'asda', 1, '', 1, 'qweq', 1, 4, 3, 2, '123', 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(9, 'asda', 'asdasda', 1231231, 'asdasd', 'C:\\fakepath\\bg-user.jpg', 'C:\\fakepath\\banner.jpg', 32111111, 'sadasdasdasdasdasdas', 'asda', 1, '', 1, 'qweq', 0, 4, 3, 2, '123', 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(10, 'asda', 'asdasda', 1231231, 'asdasd', 'C:\\fakepath\\bg-user.jpg', 'C:\\fakepath\\banner.jpg', 32111111, 'sadasdasdasdasdasdas', 'asda', 1, '', 1, 'qweq', 0, 4, 3, 2, '123', 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(11, 'asda', 'asdasda', 1231231, 'asdasd', 'C:\\fakepath\\bg-user.jpg', 'C:\\fakepath\\banner.jpg', 32111111, 'sadasdasdasdasdasdas', 'asda', 1, '', 1, 'qweq', 0, 4, 3, 2, '123', 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(12, 'asda', 'asdasda', 1231231, 'asdasd', 'C:\\fakepath\\bg-user.jpg', 'C:\\fakepath\\banner.jpg', 32111111, 'sadasdasdasdasdasdas', 'asda', 1, '', 1, 'qweq', 7, 4, 3, 2, '123', 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(13, 'asda', 'asda', 1231, 'adas', 'C:\\fakepath\\bg-user.jpg', 'C:\\fakepath\\banner.jpg', 123423, 'sdasdasdasdasda', 'asda', 1, '', 1, 'asda', 1, 4, 2, 1, '1231', 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(14, 'asda', 'asda', 1231, 'adas', 'C:\\fakepath\\bg-user.jpg', 'C:\\fakepath\\banner.jpg', 123423, 'sdasdasdasdasda', 'asda', 1, '', 1, 'asda', 1, 4, 2, 1, '1231', 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(15, 'AA1231', 'asdas', 1231231, 'dsfasdas', '{}', '{\"0\":{},\"1\":{},\"2\":{},\"3\":{},\"4\":{}}', 432423423, 'dsdfsvdfsdfvsdfsdfsdfs', 'asdasda', 1, '', 1, 'asdasd', 1, 4, 3, 2, '123', 0, 1, '2021-03-27 00:00:00', '2021-03-27 00:00:00'),
(16, 'AA1231', 'asdas', 1231231, 'dsfasdas', '{}', '{\"0\":{},\"1\":{},\"2\":{},\"3\":{},\"4\":{}}', 432423423, 'dsdfsvdfsdfvsdfsdfsdfs', 'asdasda', 1, '', 1, 'asdasd', 1, 4, 3, 2, '123', 0, 0, '2021-03-27 00:00:00', '2021-03-27 00:00:00'),
(17, 'AA1231', 'asdas', 1231231, 'dsfasdas', '{}', '{\"0\":{},\"1\":{},\"2\":{},\"3\":{},\"4\":{}}', 432423423, 'dsdfsvdfsdfvsdfsdfsdfs', 'asdasda', 1, '', 1, 'asdasd', 1, 4, 3, 2, '123', 0, 0, '2021-03-27 00:00:00', '2021-03-27 00:00:00');

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `work` varchar(255) NOT NULL,
  `phone` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `avatar` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `firstName`, `lastName`, `work`, `phone`, `email`, `password`, `avatar`) VALUES
(1, 'Vahe', 'Hakobyan', 'broker', 982342324, 'armanv@mail.ru', '4dc9f883f636348c4373d9a0a5858f49', NULL),
(2, 'Arman', 'Avetisyan', 'broker', 982342320, 'arman@mail.ru', '4dc9f883f636348c4373d9a0a5858f49', NULL),
(4, 'Arm', 'Gevorgyan', 'broker', 2147483647, 'arman12@mail.ru', '1f6cc6c1ea8fa630085dc079038da8c9', NULL);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `login` (`login`),
  ADD UNIQUE KEY `login_2` (`login`),
  ADD UNIQUE KEY `login_3` (`login`),
  ADD UNIQUE KEY `login_4` (`login`),
  ADD UNIQUE KEY `login_5` (`login`),
  ADD UNIQUE KEY `login_6` (`login`),
  ADD UNIQUE KEY `login_7` (`login`),
  ADD UNIQUE KEY `login_8` (`login`),
  ADD UNIQUE KEY `login_9` (`login`),
  ADD UNIQUE KEY `login_10` (`login`),
  ADD UNIQUE KEY `login_11` (`login`),
  ADD UNIQUE KEY `login_12` (`login`),
  ADD UNIQUE KEY `login_13` (`login`),
  ADD UNIQUE KEY `login_14` (`login`),
  ADD UNIQUE KEY `login_15` (`login`),
  ADD UNIQUE KEY `login_16` (`login`);

--
-- Индексы таблицы `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `category_department`
--
ALTER TABLE `category_department`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `category_section`
--
ALTER TABLE `category_section`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `currency`
--
ALTER TABLE `currency`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `header_menu`
--
ALTER TABLE `header_menu`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `phone` (`phone`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `phone_2` (`phone`),
  ADD UNIQUE KEY `email_2` (`email`),
  ADD UNIQUE KEY `phone_3` (`phone`),
  ADD UNIQUE KEY `email_3` (`email`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблицы `category_department`
--
ALTER TABLE `category_department`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT для таблицы `category_section`
--
ALTER TABLE `category_section`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT для таблицы `currency`
--
ALTER TABLE `currency`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблицы `header_menu`
--
ALTER TABLE `header_menu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT для таблицы `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
