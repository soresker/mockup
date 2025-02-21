declare module 'sweetalert2' {
  interface SweetAlertResult {
    isConfirmed: boolean;
    isDenied: boolean;
    isDismissed: boolean;
    value: any;
  }

  interface SweetAlertOptions {
    title?: string;
    text?: string;
    icon?: 'success' | 'error' | 'warning' | 'info' | 'question';
    html?: string;
    confirmButtonText?: string;
    confirmButtonColor?: string;
    allowOutsideClick?: boolean;
  }

  const swal: {
    fire(options: SweetAlertOptions): Promise<SweetAlertResult>;
    fire(title: string, text?: string, icon?: string): Promise<SweetAlertResult>;
  };

  export default swal;
} 