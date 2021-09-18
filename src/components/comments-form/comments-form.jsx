import React from 'react';
import {useForm} from 'react-hook-form';
import {Input, Button} from 'src/components/common/common';
import {getResolver} from 'src/helper/helper';
import {useDispatch} from 'react-redux';
import {commentActionCreator} from 'src/store/actions';
import {
  createComment as createCommentSchema,
} from 'src/validation-schemas/validation-schemas';
import {
  ButtonTypes,
  CommentsPayloadKey,
  InputTypes,
} from 'src/common/enums/enums';
import styles from './styles.module.scss';

function CommentsForm() {
  const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm({
    resolver: getResolver(createCommentSchema),
  });

  const dispatch = useDispatch();

  const handleSubmitForm = (commentPayload) => {
    dispatch(commentActionCreator.createComment(commentPayload));
    reset();
  };

  return (
    <div className="wrapper">
      <form className={styles.form} onSubmit={handleSubmit(handleSubmitForm)}>
        <Input
          name={CommentsPayloadKey.TEXT}
          label="Текст комментария"
          errors={errors}
          register={register}
          type={InputTypes.TEXTAREA}
          className={styles.text}
        />
        <Input
          name={CommentsPayloadKey.NAME}
          label="Имя"
          errors={errors}
          register={register}
          type={InputTypes.TEXT}
          className={styles.name}
        />
        <Button
          label="Отправить коментарий"
          type={ButtonTypes.SUBMIT}
          className={styles.btnSubmit}
        />
      </form>
    </div>
  );
}

export default CommentsForm;
