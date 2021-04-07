-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Мар 17 2021 г., 12:06
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
  `c_name` varchar(255) CHARACTER SET utf8 NOT NULL,
  `icon` varchar(255) CHARACTER SET utf8 NOT NULL,
  `link` varchar(255) CHARACTER SET utf8 NOT NULL
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
  `name` varchar(255) CHARACTER SET utf8 NOT NULL,
  `c_name` varchar(255) CHARACTER SET utf8 NOT NULL,
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
  `name` varchar(255) CHARACTER SET utf8 NOT NULL,
  `category_name` varchar(255) CHARACTER SET utf8 NOT NULL,
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
  `name` varchar(255) CHARACTER SET utf8 NOT NULL,
  `value` varchar(255) CHARACTER SET utf8 NOT NULL
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
  `name` varchar(255) CHARACTER SET utf8 NOT NULL,
  `link` varchar(255) CHARACTER SET utf8 NOT NULL,
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
  `id` int(11) NOT NULL,
  `p_name` varchar(255) CHARACTER SET utf8 NOT NULL,
  `address` varchar(255) CHARACTER SET utf8 NOT NULL,
  `email` varchar(255) CHARACTER SET utf8 NOT NULL,
  `p_picture` varchar(255) CHARACTER SET utf8 NOT NULL,
  `price` int(11) NOT NULL,
  `description` varchar(255) CHARACTER SET utf8 NOT NULL,
  `location` varchar(255) CHARACTER SET utf8 NOT NULL,
  `category_id` int(11) NOT NULL,
  `c_department` varchar(255) CHARACTER SET utf8 NOT NULL,
  `c_section` int(11) NOT NULL,
  `building_type` varchar(255) CHARACTER SET utf8 NOT NULL,
  `new_built` tinyint(1) NOT NULL,
  `floor` int(11) NOT NULL,
  `room_numbers` int(11) NOT NULL,
  `bathRoom_numbers` int(11) NOT NULL,
  `area` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `products`
--

INSERT INTO `products` (`id`, `p_name`, `address`, `email`, `p_picture`, `price`, `description`, `location`, `category_id`, `c_department`, `c_section`, `building_type`, `new_built`, `floor`, `room_numbers`, `bathRoom_numbers`, `area`) VALUES
(1, 'Name', '', '', '', 70000, '', '', 0, '', 0, '0', 0, 0, 0, 0, 0),
(2, 'Home', '', '', '', 150000, '', '', 0, '', 0, '', 0, 0, 0, 0, 0),
(3, 'Car', '', '', '', 30000, '', '', 0, '', 0, '', 0, 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 NOT NULL,
  `surname` varchar(255) CHARACTER SET utf8 NOT NULL,
  `phone` int(11) NOT NULL,
  `email` varchar(255) CHARACTER SET utf8 NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

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
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
