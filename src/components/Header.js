import { Image, List, Text, UnorderedList, Stack, Link, Button } from "@chakra-ui/react";
import React from "react";

const Header = () => {
  return (
    <Stack direction = {"row"} alignItems={"center"} justifyContent={"space-between"}>
      <Stack p={8}>
        <Text mx={12} fontWeight={"bolder"}>Cryptoarg</Text>
      </Stack>
      <Stack direction = {"row"} spacing = {"40px"}>
          <Link to = "/">Cryptomonedas
          </Link>
          
          <Link>Intercambios
          </Link>
          <Link>NFT
          </Link>
          <Link>Aprendé crypto!
          </Link>
      </Stack>
      <Stack justifyContent={"center"}>
          <Button size="xs">

          Iniciar sesión
          </Button>
      </Stack>
    </Stack>
  );
};

export default Header;
