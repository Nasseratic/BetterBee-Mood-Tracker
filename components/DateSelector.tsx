import { HStack, Icon, IconButton, Text } from "native-base";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { addDays, format, isToday } from "date-fns";

export function DateSelector({
  date,
  onDateChange,
}: {
  date: Date;
  onDateChange: (newDate: Date) => void;
}) {
  const isDateToday = isToday(date);
  return (
    <HStack
      justifyContent={"space-around"}
      alignItems={"center"}
      width={"100%"}
    >
      <IconButton
        onPress={() => onDateChange(addDays(date, -1))}
        icon={<Icon as={MaterialCommunityIcons} name="arrow-left" />}
      />
      <Text fontSize={"2xl"} italic>
        {format(date ?? new Date(), "MMMM dd")}
      </Text>
      <IconButton
        disabled={isDateToday}
        onPress={() => onDateChange(addDays(date, 1))}
        icon={
          <Icon
            as={MaterialCommunityIcons}
            name="arrow-right"
            color={isDateToday ? "gray.400" : "black"}
          />
        }
      />
    </HStack>
  );
}
