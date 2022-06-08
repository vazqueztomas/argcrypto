import { Stack, Text, UnorderedList, List, Image, TableContainer, Table, TableCaption, Tr, Thead, Th, Tbody, Td, Tfoot} from "@chakra-ui/react";


// import React, { useEffect, useState } from "react";

const Lista = ({ monedas }) => {
  return (
    <Stack px={8}>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>Moneda</Th>
              <Th >Symbol</Th>
              <Th isNumeric>Max 24hs</Th>
              <Th isNumeric>Min 24hs</Th>
              <Th isNumeric>Precio</Th>
            </Tr>
          </Thead>
          <Tbody>
          {monedas.map((el) => (
           <Tr>
           <Td><Stack direction = {"row"}><Text>{el.name}</Text><Image alt={el.symbol} src={el.image.thumb} /></Stack></Td>
           <Td>{el.symbol}</Td>
           <Td isNumeric>{el.market_data.high_24h.usd}</Td>
           <Td isNumeric>{el.market_data.low_24h.usd}</Td>
           <Td isNumeric>{el.market_data.current_price.usd} $USD</Td>
         </Tr>
          // <List key={el.symbol.toUpperCase()}>
          //   <Stack direction={"row"} alignItems={"center"}>
          //     <Text fontWeight={"bold"}>{el.name}</Text>

          //     
          //   </Stack>
          // </List>
        ))}
          </Tbody>
        </Table>
      </TableContainer>
      <Text fontSize={"xl"}>
        Precios de las criptomonedas según la capitalización de mercado
      </Text>
        
    </Stack>
  );
};

export default Lista;
