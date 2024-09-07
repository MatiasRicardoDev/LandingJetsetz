import { useToast } from '@chakra-ui/react';

const defaultToastConfig = {
  duration: 9000,
  isClosable: true,
  containerStyle: {
    color: 'white'
  }
};

export default function useValidateRequires() {
  const toast = useToast();

  const validate = (data: any) => {
    if (!data.origin) {
      toast({
        ...defaultToastConfig,
        status: 'warning',
        title: 'Origin is required'
      });

      return false;
    }

    if (!data.destination) {
      toast({
        ...defaultToastConfig,
        status: 'warning',
        title: 'Destination is required'
      });

      return false;
    }

    if (!data.firstDate) {
      toast({
        ...defaultToastConfig,
        status: 'warning',
        title: 'Date is required'
      });

      return false;
    }

    return true;
  };

  const validateHotel = (data: any) => {
    if (!data.origin) {
      toast({
        ...defaultToastConfig,
        status: 'warning',
        title: 'City is required'
      });

      return false;
    }

    if (!data.rooms) {
      toast({
        ...defaultToastConfig,
        status: 'warning',
        title: 'Number of rooms is required'
      });

      return false;
    }

    if (!data.firstDate) {
      toast({
        ...defaultToastConfig,
        status: 'warning',
        title: 'Check-in is required'
      });

      return false;
    }

    if (!data.secondDate) {
      toast({
        ...defaultToastConfig,
        status: 'warning',
        title: 'Check-out is required'
      });

      return false;
    }

    return true;
  };

  const validateRentalCar = (data: any) => {
    if (!data.origin) {
      toast({
        ...defaultToastConfig,
        status: 'warning',
        title: 'Pick-Up Location is required'
      });

      return false;
    }

    if (!data.firstDate) {
      toast({
        ...defaultToastConfig,
        status: 'warning',
        title: 'Check-in is required'
      });

      return false;
    }

    if (!data.secondDate) {
      toast({
        ...defaultToastConfig,
        status: 'warning',
        title: 'Check-out is required'
      });

      return false;
    }

    return true;
  };

  const validateSubscribe = (data: any) => {
    if (!data.email) {
      toast({
        ...defaultToastConfig,
        status: 'warning',
        title: 'Email is required'
      });

      return false;
    }

    const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailValidation.test(data.email)) {
      toast({
        ...defaultToastConfig,
        status: 'warning',
        title: 'Email is not valid'
      });

      return false;
    }
  };

  return {
    validate,
    validateHotel,
    validateSubscribe,
    validateRentalCar
  };
}
