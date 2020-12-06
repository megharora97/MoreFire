import { StyleSheet, Dimensions } from 'react-native';
import Fonts from '../Utils/CustomFonts';
import Config from '../Utils/Config';
import Colors from '../Utils/Colorss';
const { height, width } = Dimensions.get('window');

export default StyleSheet.create(props => ({
    container: { flex: 1, backgroundColor: Colors.White, alignItems: 'center' },
    container1: { flex: 1, backgroundColor: Colors.Grey1, alignItems: 'center' },
    LoginInputView: { flexDirection: 'row', marginHorizontal: Config.margin, marginBottom: Config.margin },
    input_style: { height: (height / 15) - (Config.TitleSmallFontSize) - (Config.margin), paddingBottom: -10, paddingTop: -10, color: Colors.Black, fontFamily: Fonts.GeometricRegular, fontSize: Config.TitleSemiBigFontSize, minHeight: 0 },
    loginInputstyle: { height: '100%', paddingBottom: -10, paddingTop: -10 },
    LoginInputView: { flexDirection: 'row', marginHorizontal: Config.margin, marginBottom: Config.margin },
    ProductCategoryPickerText: { fontWeight: 'bold', color: Colors.Black, },
    measureWindow2: { overflow: 'hidden', height: height / 20, width: '90%', },
    PickerChildContainer: { width: '100%', height: '100%', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', },
    SolidButtonText: { fontFamily: Fonts.product },
    ButtonStyle: { borderWidth: 1, borderRadius: Config.borderradius, marginBottom: Config.margin },
    LabelStyle: { color: Colors.Pinkk },
    DefaultErrorStyle: { height: 0, margin: 0 },
    IPIconDefaultContainerStyle: { height: 'auto', marginVertical: 0, paddingHorizontal: Config.margin },

    // -------------------Loader -------------------
    loadingAvatar: { paddingBottom: height / 10, justifyContent: 'center', alignItems: 'center', position: 'absolute', height: height, width: '100%', },
    ImageMy: { width: height / 15, height: height / 15, backgroundColor: Colors.trans, },
    Loader: { backgroundColor: Colors.trans, justifyContent: 'center', alignItems: 'center', width: height / 8, height: height / 8, borderRadius: height / 10, },

    // ============================= Header ================
    HeaderMainView: { height: height / 14, padding: Config.margin, width: '100%', backgroundColor: Colors.White, flexDirection: 'row', justifyContent: 'space-between', elevation: 3 },
    SearchInputMainView: { flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', padding: Config.margin, borderWidth: 0.5, borderRadius: Config.borderradius, width: width - (Config.margin * 2), alignSelf: 'center', marginTop: Config.margin },


    //-------------------- GlobalCheckbox -------------------------------------
    GlobalCheckboxTextStyle: { fontFamily: Fonts.GeometricRegular, fontWeight: 'normal', flex: 1, flexWrap: 'wrap', height: '100%', textAlignVertical: 'center', marginLeft: Config.margin, marginRight: 0 },
    CheckBoxContainerStyle: { margin: 0, marginLeft: 0, marginRight: 0, padding: Config.margin, borderWidth: 0, backgroundColor: Colors.trans },
    available: { backgroundColor: Colors.Grey89, borderColor: Colors.Grey, borderRadius: 1, padding: Config.borderradius },
    AvailableText: { fontSize: height / 55, color: Colors.White, fontFamily: Fonts.GeometricSemiBold },


    // ============= Side Menu ===================
    container12: { flex: 1, backgroundColor: Colors.NavyBlue, alignItems: 'center' },
    SideMenuView: { width: '100%', backgroundColor: Colors.White, paddingVertical: Config.margin / 2, borderBottomWidth: StyleSheet.hairlineWidth * 2, borderColor: Colors.Grey66, paddingHorizontal: Config.margin },
    SideMenuTextView: { justifyContent: 'center', marginLeft: (width / 12) + (Config.margin * 2), width: width - (Config.margin * 25), },
    SideMenuText: { fontSize: Config.TitleMediumFontSize, textDecorationLine: 'underline', fontFamily: Fonts.GeometricRegular },
    SideMenuItem: { flexDirection: 'row', justifyContent: 'center', borderWidth: StyleSheet.hairlineWidth * 2, borderColor: Colors.Grey66, padding: Config.margin },
    SideMenuItem1: { flexDirection: 'row', justifyContent: 'center', borderWidth: StyleSheet.hairlineWidth * 2, borderColor: Colors.Grey66, padding: Config.margin/2 },
    ItemTitle: { fontSize: Config.TitleSemiBigFontSize, fontFamily: Fonts.GeometricRegular,color:Colors.White },
    ItemView: { justifyContent: 'center', marginLeft: Config.margin, width: width - (Config.margin * 22), },
    InactiveCorouselDot: { borderRadius: 10, width: height / 150, height: height / 150, backgroundColor: Colors.Grey },
}));