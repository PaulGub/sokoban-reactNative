import { Modal, StyleSheet, View } from 'react-native';

const DialogModal = ({ modalVisible, children }) => {
  return (
      <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {children}
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
    position: "relative",
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 30,
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
});

export default DialogModal;