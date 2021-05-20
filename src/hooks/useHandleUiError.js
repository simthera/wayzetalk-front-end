import { useStoreActions } from 'easy-peasy';

export function useHandleUiError(errorMessage) {
  const toggleModal = useStoreActions(actions => actions.modal.toggleModal);
  const setModalMessage = useStoreActions(
    actions => actions.modal.setModalMessage,
  );
  const setModalType = useStoreActions(actions => actions.modal.setModalType);
  const setPrimaryAction = useStoreActions(
    actions => actions.modal.setPrimaryAction,
  );

  toggleModal(true);
  setModalMessage(errorMessage);
  setModalType('error');
  setPrimaryAction(() => toggleModal(false));
}
