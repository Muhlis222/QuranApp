import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';

const Beranda = () => {
    //1. Siapkan state untuk menampung data
    const [dataQuran, setDataQuran] = useState(null);
    //2. Siapkan fungsi untuk mengambil data dari API
    const ambilData = async () => {
        try {
            // connect ke API
            const respon = await fetch('https://equran.id/api/v2/surat');
            // ubah data ke bentuk json
            const hasil = await respon.json();

            // simpan data ke state
            //console.log(hasil.data);
            setDataQuran(hasil.data);
        } catch (error) {
            console.log(error);
        }
    };
    //3. load data dari fungsi getData pake useEffect
    useEffect(() => {
        ambilData();
    });

    return (
        <View style={styles.box}>
            <ScrollView>
                {dataQuran?.map((data, index) => {
                    return (
                        <TouchableOpacity key={index}>
                            <Text style={styles.ayat}>
                                {data.nomor} - {data.nama} - {data.namaLatin}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        textAlign: 'center',
        fontSize: 18,
    },
    verse: {
        textAlign: 'center',
        fontSize: 16,
        marginTop: 10,
        fontStyle: 'italic',
    },
    box: {
        padding: '10',
    },
});

export default Beranda;