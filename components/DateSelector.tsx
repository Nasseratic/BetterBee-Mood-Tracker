import React from "react";
import { addDays, format, isToday } from "date-fns";
import { Button, Icon, Text } from "@ui-kitten/components";
import { View } from "react-native";

export function DateSelector({
  date,
  onDateChange,
}: {
  date: Date;
  onDateChange: (newDate: Date) => void;
}) {
  const isDateToday = isToday(date);
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Button
        onPress={() => onDateChange(addDays(date, -1))}
        size={"icon"}
        accessoryLeft={<Icon name="arrow-ios-back-outline" />}
      />
      <Text category={"h3"}>{format(date ?? new Date(), "MMMM dd")}</Text>
      <Button
        disabled={isDateToday}
        size={"icon"}
        onPress={() => onDateChange(addDays(date, 1))}
        accessoryLeft={<Icon name="arrow-ios-forward-outline" />}
      />
    </View>
  );
}
