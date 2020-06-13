import GlobalSnackbar, { setGlobalSnackbar } from "./globalSnackbar.provider"

export interface UseGlobalSnackbar {
    isOpen: boolean
    data: any
    handleClose: () => void
}

export default function useGlobalSnackbar(): UseGlobalSnackbar {
    const [globalSnackbar] = GlobalSnackbar.useGlobal()

    function handleClose() {
        setGlobalSnackbar("HIDE")
    }

    return { ...globalSnackbar, handleClose }
}
