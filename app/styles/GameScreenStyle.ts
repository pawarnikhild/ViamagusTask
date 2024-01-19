import { StyleSheet } from "react-native";
import { AppColor, FontSize } from "../utils/StyleConstants";

export default StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingHorizontal: 10,
        paddingBottom: 10
    },
    heading: {
        fontSize: FontSize.large,
        color: AppColor.black,
        fontFamily: "AvenirNextLTPro-Regular",
        fontWeight: "bold"
    },
    mainBox: {
        paddingVertical: 20,
        paddingHorizontal: 4,
    },
    pruplePart: {
        paddingTop: 20,
        paddingHorizontal: 20,
        paddingBottom: 20,
        backgroundColor: AppColor.purple,
    },
    rowSpaceBetween: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    onlyRow: {
        flexDirection: "row",
    },
    purplePartText1: {
        color: AppColor.lightPurpleText,
        fontSize: FontSize.extraSmall,
        fontFamily: "Montserrat Regular",
    },
    infoIcon: {
        marginLeft: 5,
    },
    purplePartText2: {
        color: AppColor.lightPurpleText2,
        fontSize: FontSize.small,
        fontFamily: "Montserrat Regular",
    },
    clockIcon: {
        marginHorizontal: 5,
    },
    purplePartText3: {
        color: AppColor.white,
        fontSize: FontSize.medium,
        fontFamily: "Montserrat Regular",
    },
    whitePart: {
        paddingTop: 30,
        paddingHorizontal: 20,
        paddingBottom: 20,
        backgroundColor: AppColor.white
    },
    whitePartText1: {
        color: AppColor.lightGreyText,
        fontSize: FontSize.extraSmall,
        fontFamily: "Montserrat Regular",
        marginBottom: 10
    },
    whitePartText2: {
        color: AppColor.black,
        fontSize: FontSize.medium,
        fontFamily: "AvenirNextLTPro-Regular",
        fontWeight: "bold"
    },
    icon: {
        marginHorizontal: 6,
    },
    whitePartText3: {
        color: AppColor.greyText,
        fontSize: FontSize.medium,
        fontFamily: "Montserrat Regular",
        marginBottom: 14
    },
    greyPart: {
        paddingTop: 30,
        paddingHorizontal: 20,
        paddingBottom: 20,
        backgroundColor: AppColor.lightGrey
    },
    greyPartText1: {
        marginLeft: 10,
        color: AppColor.greyText,
        fontSize: FontSize.medium,
        fontFamily: "Montserrat Regular",
        fontWeight: "bold"
    },
    greyPartText2: {
        color: AppColor.greyText,
        fontSize: FontSize.small,
        fontFamily: "Montserrat Regular",
    }
});