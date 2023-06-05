import React, { useRef, useEffect } from 'react';
import { Modal, StyleSheet, Text, View } from 'react-native';
import Button from "./Button";
import Confetti from 'react-native-confetti';

const DialogModal = ({ modalVisible, modalText, btnText, closeModal }) => {
  const confettiRef = useRef();

  useEffect(() => {
    if (modalVisible) {
      confettiRef.current.startConfetti();
    }
  }, [modalVisible]);

  return (
      <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
      >
        <View style={styles.centeredView}>
          <Confetti ref={confettiRef} />
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{modalText}</Text>
            <Button onPress={closeModal} text={btnText} />
          </View>
        </View>
      </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default DialogModal;