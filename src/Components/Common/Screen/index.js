import React from 'react';
import styles from './styles';
import { ScrollView, Row, Box, Text } from 'native-base';


const Screen = ({showHeader, title, onPress, children}) => {
    return (
        <ScrollView style={styles.container}>
            {showHeader &&
            <Row style={styles.header}>
                <Text style={[styles.container,]}>{title}</Text>
            </Row>}

            <Box mt={1}>{children}</Box>
        </ScrollView>
    )
}
;
export default Screen;