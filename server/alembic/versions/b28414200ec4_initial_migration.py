"""Initial migration

Revision ID: b28414200ec4
Revises: 
Create Date: 2024-11-24 01:57:25.233314

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision: str = 'b28414200ec4'
down_revision: Union[str, None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint('market_data_token_id_fkey', 'market_data', type_='foreignkey')
    op.create_foreign_key(None, 'market_data', 'tokens', ['token_id'], ['id'], ondelete='CASCADE')
    op.alter_column('trades', 'position_size',
               existing_type=sa.DOUBLE_PRECISION(precision=53),
               nullable=False)
    op.alter_column('trades', 'entry_price',
               existing_type=sa.DOUBLE_PRECISION(precision=53),
               nullable=False)
    op.alter_column('trades', 'leverage',
               existing_type=sa.DOUBLE_PRECISION(precision=53),
               nullable=False)
    op.alter_column('trades', 'is_long',
               existing_type=sa.BOOLEAN(),
               nullable=False)
    op.alter_column('trades', 'status',
               existing_type=sa.VARCHAR(),
               nullable=False)
    op.alter_column('trades', 'created_at',
               existing_type=postgresql.TIMESTAMP(),
               nullable=False)
    op.drop_constraint('trades_user_id_fkey', 'trades', type_='foreignkey')
    op.drop_constraint('trades_token_id_fkey', 'trades', type_='foreignkey')
    op.create_foreign_key(None, 'trades', 'tokens', ['token_id'], ['id'], ondelete='CASCADE')
    op.create_foreign_key(None, 'trades', 'users', ['user_id'], ['id'], ondelete='CASCADE')
    op.drop_constraint('user_achievements_achievement_id_fkey', 'user_achievements', type_='foreignkey')
    op.drop_constraint('user_achievements_user_id_fkey', 'user_achievements', type_='foreignkey')
    op.create_foreign_key(None, 'user_achievements', 'users', ['user_id'], ['id'], ondelete='CASCADE')
    op.create_foreign_key(None, 'user_achievements', 'achievements', ['achievement_id'], ['id'], ondelete='CASCADE')
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'user_achievements', type_='foreignkey')
    op.drop_constraint(None, 'user_achievements', type_='foreignkey')
    op.create_foreign_key('user_achievements_user_id_fkey', 'user_achievements', 'users', ['user_id'], ['id'])
    op.create_foreign_key('user_achievements_achievement_id_fkey', 'user_achievements', 'achievements', ['achievement_id'], ['id'])
    op.drop_constraint(None, 'trades', type_='foreignkey')
    op.drop_constraint(None, 'trades', type_='foreignkey')
    op.create_foreign_key('trades_token_id_fkey', 'trades', 'tokens', ['token_id'], ['id'])
    op.create_foreign_key('trades_user_id_fkey', 'trades', 'users', ['user_id'], ['id'])
    op.alter_column('trades', 'created_at',
               existing_type=postgresql.TIMESTAMP(),
               nullable=True)
    op.alter_column('trades', 'status',
               existing_type=sa.VARCHAR(),
               nullable=True)
    op.alter_column('trades', 'is_long',
               existing_type=sa.BOOLEAN(),
               nullable=True)
    op.alter_column('trades', 'leverage',
               existing_type=sa.DOUBLE_PRECISION(precision=53),
               nullable=True)
    op.alter_column('trades', 'entry_price',
               existing_type=sa.DOUBLE_PRECISION(precision=53),
               nullable=True)
    op.alter_column('trades', 'position_size',
               existing_type=sa.DOUBLE_PRECISION(precision=53),
               nullable=True)
    op.drop_constraint(None, 'market_data', type_='foreignkey')
    op.create_foreign_key('market_data_token_id_fkey', 'market_data', 'tokens', ['token_id'], ['id'])
    # ### end Alembic commands ###
