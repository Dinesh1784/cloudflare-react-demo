import { useColorMode, IconButton, useColorModeValue } from "@chakra-ui/react";

import { FiSun, FiMoon } from "react-icons/fi";

const ThemeToggleBtn = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <IconButton
      mx={"8"}
      colorScheme={useColorModeValue("purple", "orange")}
      onClick={toggleColorMode}
      aria-label="Toggle theme"
      icon={useColorModeValue(<FiSun />, <FiMoon />)}
    />
  );
};

export default ThemeToggleBtn;
