import { StyleSheet } from 'react-native'
import { AppColor, FontSize } from "../utils/StyleConstants";

export default StyleSheet.create({
    text1: {
        textAlign: "center",
        fontSize: FontSize.small,
        color: AppColor.greyText,
        fontFamily: "Montserrat Regular",
    },
    PImageAndIconContainer: {
        width: 76,
        height: 76,
        alignSelf: "center",
        marginBottom: 10
    },
    profileImage: {
        alignSelf: "center",
        width: 76,
        height: 76,
        borderRadius: 40,
        marginBottom: 10
    },
    editIcon: {
        position: "absolute",
        bottom: 0,
        right: 0,
        width: 24,
        height: 24,
        borderRadius: 15
    },
    logoutButtonView: {
        marginVertical: 14,
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
    },
    signOutIcon: {
        marginRight: 6
    },
    boxContainer: {
        marginVertical: 20,
        marginHorizontal: 6,
        borderWidth: 1,
        borderColor: AppColor.lightGreyText,
        borderRadius: 6,
        padding: 20
    },
    starIconBgArc: {
        position: 'absolute',
        top: -15,
        right: "50%",
        left: "50%",
        bottom: 0,
        width: 30,
        height: 30,
        borderRadius: 15,
        borderWidth: 4,
        borderRightColor: "rgba(255, 255, 255, 0.1)",
        borderTopColor: AppColor.golden,
        borderLeftColor: AppColor.golden,
        borderBottomColor: AppColor.golden,
        justifyContent: "center",
        alignItems: "center",
    },
    starUpDownIconBg: {
        width: 26,
        height: 26,
        borderRadius: 13,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 7
    },
    text2: {
        fontSize: FontSize.large,
        color: AppColor.black,
        fontFamily: "Montserrat Regular",
        fontWeight: "bold",
    },
})