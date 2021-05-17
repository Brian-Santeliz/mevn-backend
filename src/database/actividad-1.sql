--
-- Base de datos: `actividad-1`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `edificaciones`
--

CREATE TABLE `edificaciones` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) COLLATE utf16_spanish_ci NOT NULL,
  `ancho` varchar(30) COLLATE utf16_spanish_ci NOT NULL,
  `alto` varchar(30) COLLATE utf16_spanish_ci NOT NULL,
  `largo` varchar(30) COLLATE utf16_spanish_ci NOT NULL,
  `material` varchar(30) COLLATE utf16_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_spanish_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `edificaciones`
--
ALTER TABLE `edificaciones`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `edificaciones`
--
ALTER TABLE `edificaciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
