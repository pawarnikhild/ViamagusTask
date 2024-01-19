import { StyleSheet } from 'react-native'

import GlobleStyles from './GlobleStyles'
import { AppColor } from '../utils/StyleConstants'

export default StyleSheet.create({
    container: {
        ...GlobleStyles.appContainer,
        paddingTop: 20,
        paddingHorizontal: 14,
        backgroundColor: AppColor.extraLightPurple,
    },
    badgecard: {
        marginBottom: 14
    }
})