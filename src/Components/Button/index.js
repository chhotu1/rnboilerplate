import {
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
    Text,
} from "react-native";
import React from "react";
import { SIZES,BUTTON,BUTTONTEXT } from "../../Constant";

export default function Button(props) {
    const {title,onPress} = props;
    return (
        <View style={styles.inputWrap}>
            <TouchableOpacity activeOpacity={0.5}
                style={{ ...BUTTON.primary }}
                onPress={onPress}
                
            >
                <Text style={{ ...BUTTONTEXT.primary }}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    inputWrap: {
        paddingBottom: SIZES.basePadding,
        paddingVertical:SIZES.basePadding*3
    },
});
