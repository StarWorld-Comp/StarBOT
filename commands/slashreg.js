module.exports = [{
    name: "slashreg",
    type: "ready",
    channel: "",
    code:
    `
$createApplicationCommand[global;filters;Управление фильтрами для трека.;true;false;slash;[

  {

    "type": 1,

    "name": "add",

    "description": "Добавить фильтры для текущего трека.",

    "options": [

      {

        "type": 3,

        "name": "filter",

        "description": "Выберите фильтр",

        "required": true,

        "choices": [

          {

            "name": "NightCore",

            "value": "nightCore"

          },

          {

            "name": "BassBoost",

            "value": "bassBoost"

          },

          {

            "name": "8D",

            "value": "8D"

          },

          {

            "name": "Pitch",

            "value": "pitch"

          },

          {

            "name": "Karaoke",

            "value": "karaoke"

          },

          {

            "name": "Slowed",

            "value": "slowed"

          },

          {

            "name": "Deep",

            "value": "deep"

          },

          {

            "name": "TrebleBoost",

            "value": "trebleBoost"

          },

          {

            "name": "Gate",

            "value": "gate"

          },

          {

            "name": "Vibrato",

            "value": "vibrato"

          },

          {

            "name": "Flanger",

            "value": "flanger"

          },

          {

            "name": "Phaser",

            "value": "phaser"

          }

        ]

      },

      {

        "type": 4,

        "name": "value",

        "description": "Уровень воздействия",

        "required": true

      }

    ]

  },

  {

    "type": 1,

    "name": "remove",

    "description": "Удалить фильтр для текущего трека.",

    "options": [

      {

        "type": 3,

        "name": "filter",

        "description": "Выберите фильтр",

        "required": true,

        "choices": [

          {

            "name": "NightCore",

            "value": "nightCore"

          },

          {

            "name": "BassBoost",

            "value": "bassBoost"

          },

          {

            "name": "8D",

            "value": "8D"

          },

          {

            "name": "Pitch",

            "value": "pitch"

          },

          {

            "name": "Karaoke",

            "value": "karaoke"

          },

          {

            "name": "Slowed",

            "value": "slowed"

          },

          {

            "name": "Deep",

            "value": "deep"

          },

          {

            "name": "TrebleBoost",

            "value": "trebleBoost"

          },

          {

            "name": "Gate",

            "value": "gate"

          },

          {

            "name": "Vibrato",

            "value": "vibrato"

          },

          {

            "name": "Flanger",

            "value": "flanger"

          },

          {

            "name": "Phaser",

            "value": "phaser"

          }

        ]

      }

    ]

  },

  {

    "type": 1,

    "name": "set",

    "description": "Установить фильтр для текущего трека.",

    "options": [

      {

        "type": 3,

        "name": "filter",

        "description": "Выберите фильтр",

        "required": true,

        "choices": [

          {

            "name": "NightCore",

            "value": "nightCore"

          },

          {

            "name": "BassBoost",

            "value": "bassBoost"

          },

          {

            "name": "8D",

            "value": "8D"

          },

          {

            "name": "Pitch",

            "value": "pitch"

          },

          {

            "name": "Karaoke",

            "value": "karaoke"

          },

          {

            "name": "Slowed",

            "value": "slowed"

          },

          {

            "name": "Deep",

            "value": "deep"

          },

          {

            "name": "TrebleBoost",

            "value": "trebleBoost"

          },

          {

            "name": "Gate",

            "value": "gate"

          },

          {

            "name": "Vibrato",

            "value": "vibrato"

          },

          {

            "name": "Flanger",

            "value": "flanger"

          },

          {

            "name": "Phaser",

            "value": "phaser"

          }

        ]

      },

      {

        "type": 4,

        "name": "value",

        "description": "Уровень взаимодействия",

        "required": true

      }

    ]

  },

  {

    "type": 1,

    "name": "get",

    "description": "Показать активные фильтры для данного трека.",

    "options": []

  },

  {

    "type": 1,

    "name": "reset",

    "description": "Сбросить все фильтры для данного трека.",

    "options": []

  }

]]
$log[Слэш-команда зарегистрирована]`
}];