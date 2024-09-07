import { Box, Button, Input, InputGroup } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';

import useValidateRequires from '@/hooks/useValidateRequires';
import { subscribeUser } from '@/services/subscribe.service';

const subscribeSchema = object({
  email: string()
});

export const Subscribe = () => {
  const validateRequire = useValidateRequires();
  const { handleSubmit, setValue } = useForm({
    resolver: yupResolver(subscribeSchema),
    defaultValues: {
      email: ''
    }
  });
  const { isPending, data, error, mutate } = useMutation({
    mutationFn: (data: any) => {
      return subscribeUser(data);
    }
  });

  const onSubmit = handleSubmit(data => {
    const isValid = validateRequire.validateSubscribe(data);

    if (!isValid) {
      return;
    }

    mutate(data);
  });
  return (
    <Box alignItems="center" color="#000" my={2} w="100%" maxWidth="360px">
      <form onSubmit={onSubmit}>
        <InputGroup>
          <Input
            type="email"
            placeholder="Email Address"
            backgroundColor="white"
            border="none"
            outline="none"
            px={3}
            height="40px"
            borderRadius="2px 0px 0px 2px"
            onChange={(e: any) => {
              setValue('email', e.target.value);
            }}
          />

          <Button
            colorScheme="primary"
            borderRadius="0px 2px 2px 0px"
            px={6}
            height="40px"
            type="submit">
            Subscribe
          </Button>
        </InputGroup>
      </form>
    </Box>
  );
};

export default Subscribe;
