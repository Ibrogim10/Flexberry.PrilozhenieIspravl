import { Serializer as ТЧСоставСпортSerializer } from
  '../mixins/regenerated/serializers/i-i-s-prilozhenie-ispravl-т-ч-состав-спорт';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ТЧСоставСпортSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
