# Generated by Django 2.1.4 on 2019-01-27 06:55

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='News',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Article_title', models.CharField(max_length=200)),
                ('Article_content', models.TextField()),
                ('Article_type', models.CharField(max_length=200)),
                ('Article_date', models.DateTimeField(auto_now_add=True)),
                ('Article_like', models.IntegerField(default=0)),
            ],
            options={
                'db_table': 'Article',
            },
        ),
    ]
