import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';

const Beranda = () => {
    //1. Buat state / penyimpanan data
    const [dataQuran, setDataQuran] = useState(null);
    //2. Fungsi untuk mengambil data dari API
    const getData = async () => {
        try {
            const respon = await fetch('https://equran.id/api/v2/surat'); //koneksi ke API
            const hasil = await respon.json();
            //console.log(hasil.data);
            setDataQuran(hasil.data);
        } catch (error) {
            console.log(error);
        }
    };
    //3. load data dari fungsi getData pake useEffect
    useEffect(() => {
        getData();
    });

    return (
        <View>
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
});

export default Beranda;